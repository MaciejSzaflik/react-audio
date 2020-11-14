import React from "react";
import Piece from "../piece";

import AudioGenerator from "../audioGenerator";
import NoteButton from "./noteButton";

type OctaveProp = {
  generator : AudioGenerator;
  octave : number;
}

type OctaveState = {
  pieces : Piece[];
}

class OctaveButtons extends React.Component<OctaveProp, OctaveState> {

  constructor(props : OctaveProp)
  {
    super(props);

    let octaveItems : string[] = props.generator.noteAtlas.getOctave(props.octave);
    let createdPieces = new Array<Piece>(12);
    octaveItems.forEach(function(item){
      createdPieces.push(new Piece(item, 0.2));
    });
    this.state = {
      pieces: createdPieces
    };
  }

  render() {
    let items = this.state.pieces.map(item => (
        <NoteButton generator={this.props.generator} piece={item}/>
    ));
    return (
      <div>
        {items}
      </div>
    );
  }
}

export default OctaveButtons; 