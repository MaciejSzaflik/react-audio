import React from "react";
import {Button} from '@material-ui/core';
import Track from "../track/track";
import AudioGenerator from "../audioGenerator";
import Piece from "../piece";
import { Duration } from "../track/notation";

type TrackProp = {
  generator : AudioGenerator;
}

class TrackButton extends React.Component<TrackProp> {

  playPiece() {
    
    let track = new Track();
    track.addNote(new Piece("C0", Duration.Whole),1);
    track.addNote(new Piece("C1", Duration.Whole),2);
    track.addNote(new Piece("C0", Duration.Whole),3);
    track.addNote(new Piece("C1", Duration.Whole),4);
    this.props.generator.fromTrack(track);
  }

  render() {
    return (
        <Button 
          variant='contained' 
          color="primary" 
          onClick={()=>{this.playPiece()}}
        >
          Play Track
        </Button>
    );
  }
}

export default TrackButton; 