import {Duration} from './notation'

class TrackNote {
  public id : number;
  
  public name : string;
  public duration : Duration;
  public start : number;

  constructor(id: number,name: string, duration: Duration, start: number) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.start = start;
  }
}

export default TrackNote;