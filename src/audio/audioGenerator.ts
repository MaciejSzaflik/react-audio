import NoteGenerator from './noteGenerator';
import NoteAtlas from './noteAtlas';
import Piece from './piece';
import Track from './track/track';
import TrackNote from './track/trackNote';

class AudioGenerator {
  public context : AudioContext;
  public noteAtlas : NoteAtlas;
  
  constructor() {
    this.context = new AudioContext();
    this.noteAtlas = new NoteAtlas();
  }

  note(duration: number)
  {
    let note = new NoteGenerator();
    note.createNote(this.context, 'sine', 194, 2);
    note.oscillator.start(0);
    note.oscillator.stop(this.context.currentTime + duration);
  }

  fromPiece(piece : Piece)
  {
    let noteGen = new NoteGenerator();
    let note = this.noteAtlas.noteAtlas[piece.name];
    if(note!=null)
    {
      noteGen.createNote(this.context, 'sine', note.frequency ,piece.duration);
      noteGen.oscillator.start(0);
      noteGen.oscillator.stop(this.context.currentTime + piece.duration);
    }
  }

  addTrackPiece(piece : TrackNote)
  {
    let noteGen = new NoteGenerator();

    let note = this.noteAtlas.noteAtlas[piece.name];
    if(note!=null)
    {
      noteGen.createNote(this.context, 'sine', note.frequency ,piece.duration, piece.start);
      let start = this.context.currentTime + piece.start
      let end = start + piece.duration;

      noteGen.oscillator.start(start);
      noteGen.oscillator.stop(end);
    }
  }

  fromTrack(track : Track)
  {
    for(let item of track.trackNotes )
    {
      this.addTrackPiece(item);
    }
  }
}

export default AudioGenerator;