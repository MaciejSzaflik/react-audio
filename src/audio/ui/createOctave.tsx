import React from "react";
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import AudioGenerator from "../audioGenerator";
import OctaveButtons from "./octaveButtons";

type CreateOctaveState = {
  generator : AudioGenerator;
  octaveButtons : JSX.Element;
  number : number
}

class CreateOctave extends React.Component<{}, CreateOctaveState>{

  createContexAndButtons()
  {
    let number = 1;
    if(this.state!=null)
    {
      number = this.state.number;
    }

    let gen = new AudioGenerator();
    let buttons = (
      <div>
        <OctaveButtons generator={gen} octave={0}></OctaveButtons>
        <OctaveButtons generator={gen} octave={1}></OctaveButtons>
        <OctaveButtons generator={gen} octave={2}></OctaveButtons>
        <OctaveButtons generator={gen} octave={3}></OctaveButtons>
        <OctaveButtons generator={gen} octave={4}></OctaveButtons>
      </div>
    );

    this.setState({
      generator : gen,
      octaveButtons : buttons,
      number : number
    });
  }

  handleTextFieldChange(value:string) {
    this.setState({
        number: +value
    });
  }

  getSelectionField() : JSX.Element
  {
    return (
    <TextField
          id="standard-number"
          label="Number"
          type="number"
          defaultValue="1"
          variant="filled"
          onChange={(e)=> this.handleTextFieldChange(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
    />)
  }

  render() {
    let button: JSX.Element = (<Button color="primary" onClick={()=>{this.createContexAndButtons()}}>Start</Button>);
    //let form: JSX.Element = this.getSelectionField();
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
          {this.state.octaveButtons}
          {button}
        </div>
      );
    }
  }
}

export default CreateOctave; 