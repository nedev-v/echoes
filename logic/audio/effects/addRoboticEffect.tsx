export async function applyRobotEffect(blob: Blob): Promise<AudioBuffer> {
  const arrayBuffer = await blob.arrayBuffer();

  const originalCtx = new AudioContext();
  const decoded = await originalCtx.decodeAudioData(arrayBuffer);

  const offlineCtx = new OfflineAudioContext(
    decoded.numberOfChannels,
    decoded.length,
    decoded.sampleRate
  );

  const source = offlineCtx.createBufferSource();
  source.buffer = decoded;

  // 1. WaveShaper for distortion
  const waveShaper = offlineCtx.createWaveShaper();
  waveShaper.curve = makeRobotDistortionCurve();
  waveShaper.oversample = "4x";

  // 2. BiquadFilter for bandpass (robotic tone)
  const bandpass = offlineCtx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.value = 1000; // center freq
  bandpass.Q.value = 1; // bandwidth

  // 3. Output gain
  const gain = offlineCtx.createGain();
  gain.gain.value = 0.7;

  source.connect(waveShaper);
  waveShaper.connect(bandpass);
  bandpass.connect(gain);
  gain.connect(offlineCtx.destination);

  source.start();
  const renderedBuffer = await offlineCtx.startRendering();
  return renderedBuffer;
}

function makeRobotDistortionCurve(amount = 100): Float32Array {
  const samples = 44100;
  const curve = new Float32Array(samples);
  const deg = Math.PI / 180;

  for (let i = 0; i < samples; i++) {
    const x = (i * 2) / samples - 1;
    curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
  }

  return curve;
}