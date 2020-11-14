import { Shape } from './shape';
import { Track } from '../track/track';
import { Drawer } from './drawer';
import { Event, EventEmitter } from '@billjs/event-emitter';
import { EventType } from '../eventType';
import NoteAtlas from '../noteAtlas';

export class CanvasBridge
{
  public drawer!: Drawer;
  public emitter: EventEmitter;
  public noteAtlas: NoteAtlas;
  public track!: Track;
  //public canvas: HTMLCanvasElement | null

  constructor(generator: EventEmitter, noteAtlas: NoteAtlas)
  {
    this.emitter = generator;
    this.noteAtlas = noteAtlas; 

    generator.on(EventType.clearTrack, this.onClearTrack);
    generator.on(EventType.notePlayed, evt => this.onPiecePlayed(evt));
  }

  onClearTrack() {
  }

  onPiecePlayed(evt: Event) {
    console.log(evt);
  }

}