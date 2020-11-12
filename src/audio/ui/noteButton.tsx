import React from "react";
import {Button} from '@material-ui/core';
import Piece from "../piece";
import AudioGenerator from "../audioGenerator";

type PieceProp = {
  generator : AudioGenerator;
  piece : Piece;
}

class NoteButton extends React.Component<PieceProp> {
  size : any = {fontSize:'7px', margin:'5px', maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'};

  playPiece() {
    let piece = this.props.piece;
    this.props.generator.fromPiece(piece);
  }

  render() {
    return (
        <Button 
          style={this.size} 
          variant='contained' 
          color="primary" 
          onClick={()=>{this.playPiece()}}
        >
          {this.props.piece.name}
        </Button>
    );
  }
}

export default NoteButton; 