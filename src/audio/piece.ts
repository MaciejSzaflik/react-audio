import { Duration } from './track/notation';

class Piece {
  public name : string;
  public duration : Duration;

  constructor(name: string, duration: Duration) {
    this.name = name;
    this.duration = duration;
  }
}

export default Piece;