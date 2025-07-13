import toWav from 'audiobuffer-to-wav';

export function convertAudioBufferToWavFile(audioBuffer: AudioBuffer): File {
  const wavData = toWav(audioBuffer);
  const wavBlob = new Blob([wavData], { type: 'audio/wav' });
  const file = new File([wavBlob], 'voice.wav', { type: 'audio/wav' });
  return file;
}

