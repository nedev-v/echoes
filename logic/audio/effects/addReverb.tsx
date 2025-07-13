import { v4 as uuidv4 } from 'uuid';

export async function applyReverbToBlobAudio(
  inputBlob: Blob,
): Promise<AudioBuffer> {
  const originalCtx = new AudioContext();

  // 1. Decode the original blob
  const arrayBuffer = await inputBlob.arrayBuffer();
  const inputBuffer = await originalCtx.decodeAudioData(arrayBuffer);

  // 2. Load impulse response (reverb effect)
  const impulseUrl = "/ir/hall.wav";
  const impulseResponse = await fetch(impulseUrl).then(res => res.arrayBuffer());
  const irBuffer = await originalCtx.decodeAudioData(impulseResponse);

  // 3. Create OfflineAudioContext
  const offlineCtx = new OfflineAudioContext(
    inputBuffer.numberOfChannels,
    inputBuffer.length,
    inputBuffer.sampleRate
  );

  // 4. Create nodes
  const source = offlineCtx.createBufferSource();
  source.buffer = inputBuffer;

  const convolver = offlineCtx.createConvolver();
  convolver.buffer = irBuffer;

  // Optional: Adjust reverb level with gain nodes
  const wetGain = offlineCtx.createGain();
  wetGain.gain.value = 0.5; // 50% reverb

  const dryGain = offlineCtx.createGain();
  dryGain.gain.value = 0.5; // 50% dry/original

  // 5. Connect graph
  source.connect(dryGain).connect(offlineCtx.destination);
  source.connect(convolver).connect(wetGain).connect(offlineCtx.destination);

  source.start(0);

  // 6. Render to buffer
  const renderedBuffer = await offlineCtx.startRendering();
  return renderedBuffer;
}


