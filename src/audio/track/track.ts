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
}

export default Track;