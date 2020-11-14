import Piece from "../piece";
import TrackNote from "./trackNote";

export class Track
{
  idGen : number = 0;
  trackNotes: Array<TrackNote> = [];

  addNote(piece : Piece, start: number)
  {
    this.trackNotes.push(
      new TrackNote(
        this.idGen++,
        piece.name,
        piece.duration,
        start
      )
    );
  }

  addNoteAtEnd(piece : Piece)
  {
    let end = this.getEnd();
    this.addNote(piece, end);
  }

  getEnd(): number
  {
    let max: number = 0;
    for(let i : number = 0;i < this.trackNotes.length;i++)
    {
      let value: number = this.trackNotes[i].start + this.trackNotes[i].duration;
      if(value > max)
        max = value;
    }
    return max;
  }
}

export default Track;