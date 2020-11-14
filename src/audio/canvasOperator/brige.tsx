import { Rect } from './shape';
import { Shape } from './shape';
import { Track } from '../track/track';
import { Drawer } from './drawer';
import { Event, EventEmitter } from '@billjs/event-emitter';
import { EventType } from '../eventType';
import NoteAtlas from '../noteAtlas';
import TrackNote from '../track/trackNote';

export class CanvasBridge
{
  public drawer!: Drawer;
  public emitter: EventEmitter;
  public noteAtlas: NoteAtlas;
  public track!: Track;

  constructor(generator: EventEmitter, noteAtlas: NoteAtlas)
  {
    this.emitter = generator;
    this.noteAtlas = noteAtlas; 

    generator.on(EventType.clearTrack, evt => this.onClearTrack());
    generator.on(EventType.notePlayed, evt => this.onPiecePlayed(evt));
  }

  onClearTrack() {
    this.track = new Track();

    this.trackToDrawer();
  }

  onPiecePlayed(evt: Event) {
    if(this.track === null || this.track === undefined)
      this.track = new Track();

    this.track.addNoteAtEnd(evt.data);

    this.trackToDrawer();
  }

  trackToDrawer() {
    this.drawer.shapes = new Array<Shape>();
    let scaleX: number = 100;
    let scaleY: number = 10;
    for(let i: number = 0; i< this.track.trackNotes.length;i++)
    {
      let note: TrackNote = this.track.trackNotes[i];
      let id: number = this.noteAtlas.noteAtlas[note.name].id;
      let x: number = (note.start + note.duration)*scaleX + 5*i;
      let w: number =  note.duration*scaleX;
      let h: number = scaleY;
      let y: number = id*scaleY;
      let rect: Rect = new Rect(x,y,w,h,'#637183', 1);
      this.drawer.shapes.push(rect);
    }
    this.drawer.drawAll();
  }

}