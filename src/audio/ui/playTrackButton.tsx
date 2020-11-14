import React from "react";
import {Button} from '@material-ui/core';
import AudioGenerator from "../audioGenerator";
import { CanvasBridge } from "../canvasOperator/brige";
import { EventType } from "../eventType";

type TrackProp = {
  generator : AudioGenerator;
  bridge : CanvasBridge;
}

class TrackButton extends React.Component<TrackProp> {

  playPiece() {
    if(this.props.bridge !== null && this.props.bridge.track !== null)
      this.props.generator.fromTrack(this.props.bridge.track);
  }

  clear() {
    if(this.props.generator !== null)
      this.props.generator.fire(EventType.clearTrack);
  }

  render() {
    return (
      <div>
        <Button 
          variant='contained' 
          color="primary" 
          onClick={()=>{this.playPiece()}}
        >
          Play Track
        </Button>

        <Button 
          variant='contained' 
          color="primary" 
          onClick={()=>{this.clear()}}
        >
          Clear
        </Button>
      </div>
    );
  }
}

export default TrackButton; 