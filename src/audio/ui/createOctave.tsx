import React from "react";
import {Button} from '@material-ui/core';
import AudioGenerator from "../audioGenerator";
import OctaveButtons from "./octaveButtons";
import TrackButton from "./playTrackButton";
import Canvas from "../canvasOperator/canvas";
import { CanvasBridge } from "../canvasOperator/brige";
import { EventType } from "../eventType";
import { Event } from '@billjs/event-emitter';

type CreateOctaveState = {
  generator : AudioGenerator;
  octaveButtons : JSX.Element;
  trackButton : JSX.Element;
  number : number;
}

class CreateOctave extends React.Component<{}, CreateOctaveState>{
  canvasBridge!: CanvasBridge;
  canvasRef!: React.RefObject<Canvas>;

  createContexAndButtons()
  {
    let number = 1;
    if(this.state!=null)
    {
      number = this.state.number;
    }

    let gen = new AudioGenerator();
    gen.on(EventType.drawerReady, (evt) => this.onCanvasCreated(evt));

    let buttons = (
      <div>
        <OctaveButtons generator={gen} octave={0}></OctaveButtons>
        <OctaveButtons generator={gen} octave={1}></OctaveButtons>
        <OctaveButtons generator={gen} octave={2}></OctaveButtons>
        <OctaveButtons generator={gen} octave={3}></OctaveButtons>
        <OctaveButtons generator={gen} octave={4}></OctaveButtons>
      </div>
    );

    this.canvasRef = React.createRef();
    this.canvasBridge = new CanvasBridge(gen, gen.noteAtlas);

    let trackButton = (
      <div>
        <TrackButton generator={gen} bridge={this.canvasBridge}/> 
      </div>
    )

    this.setState({
      generator : gen,
      octaveButtons : buttons,
      number : number,
      trackButton : trackButton
    });
  }

  onCanvasCreated(evt: Event) {
    this.canvasBridge.drawer = evt.data.drawer;
  }

  handleTextFieldChange(value:string) {
    this.setState({
        number: +value
    });
  }

  render() {
    let button: JSX.Element = (<Button color="primary" onClick={()=>{this.createContexAndButtons()}}>Start</Button>);
    if(this.state == null || this.state.octaveButtons==null)
    {
      return (
        <div>
          {button}
        </div>
      );
    }
    else
    {
      return (
        <div>
          <Canvas width={400} height={400} eventEmitter={this.state.generator} ref={this.canvasRef}/>
          {this.state.octaveButtons}
          {this.state.trackButton}
          {button}
        </div>
      );
    }
  }
}

export default CreateOctave; 