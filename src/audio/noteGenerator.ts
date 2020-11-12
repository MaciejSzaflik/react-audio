class NoteGenerator {
  public oscillator! : OscillatorNode;
  public gainNode!: GainNode;

  createNote(context: AudioContext, type : OscillatorType, frequencyValue : number, duration : number, start : number = 0)
  {
    this.oscillator = context.createOscillator();
    this.oscillator.type = type;
    this.oscillator.frequency.value = frequencyValue;
    this.gainNode = context.createGain();
    this.gainNode.gain.linearRampToValueAtTime(0.0001, start + context.currentTime + duration);
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(context.destination);
  }
}

export default NoteGenerator;