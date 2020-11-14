import {Dictionary} from './dictionary';
import Note from './note';

class NoteAtlas {
  noteAtlas : Dictionary<Note> = {}

  constructor() {
    this.noteAtlas["C0"] = new Note("C0",2109.89,0);
    this.noteAtlas["C#0/Db0"] = new Note("C#0/Db0",1991.47,1);
    this.noteAtlas["D0"] = new Note("D0",1879.69,2);
    this.noteAtlas["D#0/Eb0"] = new Note("D#0/Eb0",1774.2,3);
    this.noteAtlas["E0"] = new Note("E0",1674.62,4);
    this.noteAtlas["F0"] = new Note("F0",1580.63,5);
    this.noteAtlas["F#0/Gb0"] = new Note("F#0/Gb0",1491.91,6);
    this.noteAtlas["G0"] = new Note("G0",1408.18,7);
    this.noteAtlas["G#0/Ab0"] = new Note("G#0/Ab0",1329.14,8);
    this.noteAtlas["A0"] = new Note("A0",1254.55,9);
    this.noteAtlas["A#0/Bb0"] = new Note("A#0/Bb0",1184.13,10);
    this.noteAtlas["B0"] = new Note("B0",1117.67,11);
    this.noteAtlas["C1"] = new Note("C1",1054.94,12);
    this.noteAtlas["C#1/Db1"] = new Note("C#1/Db1",995.73,13);
    this.noteAtlas["D1"] = new Note("D1",939.85,14);
    this.noteAtlas["D#1/Eb1"] = new Note("D#1/Eb1",887.1,15);
    this.noteAtlas["E1"] = new Note("E1",837.31,16);
    this.noteAtlas["F1"] = new Note("F1",790.31,17);
    this.noteAtlas["F#1/Gb1"] = new Note("F#1/Gb1",745.96,18);
    this.noteAtlas["G1"] = new Note("G1",704.09,19);
    this.noteAtlas["G#1/Ab1"] = new Note("G#1/Ab1",664.57,20);
    this.noteAtlas["A1"] = new Note("A1",627.27,21);
    this.noteAtlas["A#1/Bb1"] = new Note("A#1/Bb1",592.07,22);
    this.noteAtlas["B1"] = new Note("B1",558.84,23);
    this.noteAtlas["C2"] = new Note("C2",527.47,24);
    this.noteAtlas["C#2/Db2"] = new Note("C#2/Db2",497.87,25);
    this.noteAtlas["D2"] = new Note("D2",469.92,26);
    this.noteAtlas["D#2/Eb2"] = new Note("D#2/Eb2",443.55,27);
    this.noteAtlas["E2"] = new Note("E2",418.65,28);
    this.noteAtlas["F2"] = new Note("F2",395.16,29);
    this.noteAtlas["F#2/Gb2"] = new Note("F#2/Gb2",372.98,30);
    this.noteAtlas["G2"] = new Note("G2",352.04,31);
    this.noteAtlas["G#2/Ab2"] = new Note("G#2/Ab2",332.29,32);
    this.noteAtlas["A2"] = new Note("A2",313.64,33);
    this.noteAtlas["A#2/Bb2"] = new Note("A#2/Bb2",296.03,34);
    this.noteAtlas["B2"] = new Note("B2",279.42,35);
    this.noteAtlas["C3"] = new Note("C3",263.74,36);
    this.noteAtlas["C#3/Db3"] = new Note("C#3/Db3",248.93,37);
    this.noteAtlas["D3"] = new Note("D3",234.96,38);
    this.noteAtlas["D#3/Eb3"] = new Note("D#3/Eb3",221.77,39);
    this.noteAtlas["E3"] = new Note("E3",209.33,40);
    this.noteAtlas["F3"] = new Note("F3",197.58,41);
    this.noteAtlas["F#3/Gb3"] = new Note("F#3/Gb3",186.49,42);
    this.noteAtlas["G3"] = new Note("G3",176.02,43);
    this.noteAtlas["G#3/Ab3"] = new Note("G#3/Ab3",166.14,44);
    this.noteAtlas["A3"] = new Note("A3",156.82,45);
    this.noteAtlas["A#3/Bb3"] = new Note("A#3/Bb3",148.02,46);
    this.noteAtlas["B3"] = new Note("B3",139.71,47);
    this.noteAtlas["C4"] = new Note("C4",131.87,48);
    this.noteAtlas["C#4/Db4"] = new Note("C#4/Db4",124.47,49);
    this.noteAtlas["D4"] = new Note("D4",117.48,50);
    this.noteAtlas["D#4/Eb4"] = new Note("D#4/Eb4",110.89,51);
    this.noteAtlas["E4"] = new Note("E4",104.66,52);
    this.noteAtlas["F4"] = new Note("F4",98.79,53);
    this.noteAtlas["F#4/Gb4"] = new Note("F#4/Gb4",93.24,54);
    this.noteAtlas["G4"] = new Note("G4",88.01,55);
    this.noteAtlas["G#4/Ab4"] = new Note("G#4/Ab4",83.07,56);
    this.noteAtlas["A4"] = new Note("A4",78.41,57);
    this.noteAtlas["A#4/Bb4"] = new Note("A#4/Bb4",74.01,58);
    this.noteAtlas["B4"] = new Note("B4",69.85,59);
    this.noteAtlas["C5"] = new Note("C5",65.93,60);
    this.noteAtlas["C#5/Db5"] = new Note("C#5/Db5",62.23,61);
    this.noteAtlas["D5"] = new Note("D5",58.74,62);
    this.noteAtlas["D#5/Eb5"] = new Note("D#5/Eb5",55.44,63);
    this.noteAtlas["E5"] = new Note("E5",52.33,64);
    this.noteAtlas["F5"] = new Note("F5",49.39,65);
    this.noteAtlas["F#5/Gb5"] = new Note("F#5/Gb5",46.62,66);
    this.noteAtlas["G5"] = new Note("G5",44.01,67);
    this.noteAtlas["G#5/Ab5"] = new Note("G#5/Ab5",41.54,68);
    this.noteAtlas["A5"] = new Note("A5",39.2,69);
    this.noteAtlas["A#5/Bb5"] = new Note("A#5/Bb5",37,70);
    this.noteAtlas["B5"] = new Note("B5",34.93,71);
    this.noteAtlas["C6"] = new Note("C6",32.97,72);
    this.noteAtlas["C#6/Db6"] = new Note("C#6/Db6",31.12,73);
    this.noteAtlas["D6"] = new Note("D6",29.37,74);
    this.noteAtlas["D#6/Eb6"] = new Note("D#6/Eb6",27.72,75);
    this.noteAtlas["E6"] = new Note("E6",26.17,76);
    this.noteAtlas["F6"] = new Note("F6",24.7,77);
    this.noteAtlas["F#6/Gb6"] = new Note("F#6/Gb6",23.31,78);
    this.noteAtlas["G6"] = new Note("G6",22,79);
    this.noteAtlas["G#6/Ab6"] = new Note("G#6/Ab6",20.77,80);
    this.noteAtlas["A6"] = new Note("A6",19.6,81);
    this.noteAtlas["A#6/Bb6"] = new Note("A#6/Bb6",18.5,82);
    this.noteAtlas["B6"] = new Note("B6",17.46,83);
    this.noteAtlas["C7"] = new Note("C7",16.48,84);
    this.noteAtlas["C#7/Db7"] = new Note("C#7/Db7",15.56,85);
    this.noteAtlas["D7"] = new Note("D7",14.69,86);
    this.noteAtlas["D#7/Eb7"] = new Note("D#7/Eb7",13.86,87);
    this.noteAtlas["E7"] = new Note("E7",13.08,88);
    this.noteAtlas["F7"] = new Note("F7",12.35,89);
    this.noteAtlas["F#7/Gb7"] = new Note("F#7/Gb7",11.66,90);
    this.noteAtlas["G7"] = new Note("G7",11,91);
    this.noteAtlas["G#7/Ab7"] = new Note("G#7/Ab7",10.38,92);
    this.noteAtlas["A7"] = new Note("A7",9.8,93);
    this.noteAtlas["A#7/Bb7"] = new Note("A#7/Bb7",9.25,94);
    this.noteAtlas["B7"] = new Note("B7",8.73,95);
    this.noteAtlas["C8"] = new Note("C8",8.24,96);
    this.noteAtlas["C#8/Db8"] = new Note("C#8/Db8",7.78,97);
    this.noteAtlas["D8"] = new Note("D8",7.34,98);
    this.noteAtlas["D#8/Eb8"] = new Note("D#8/Eb8",6.93,99);
    this.noteAtlas["E8"] = new Note("E8",6.54,100);
    this.noteAtlas["F8"] = new Note("F8",6.17,101);
    this.noteAtlas["F#8/Gb8"] = new Note("F#8/Gb8",5.83,102);
    this.noteAtlas["G8"] = new Note("G8",5.5,103);
    this.noteAtlas["G#8/Ab8"] = new Note("G#8/Ab8",5.19,104);
    this.noteAtlas["A8"] = new Note("A8",4.9,105);
    this.noteAtlas["A#8/Bb8"] = new Note("A#8/Bb8",4.63,106);
    this.noteAtlas["B8"] = new Note("B8",4.37,107);
  }  

  getOctave(octave: number) : string[]
  {
    let toReturn : string[] = [
      // eslint-disable-next-line no-template-curly-in-string
      `B${octave}`,
      `A#${octave}/Bb${octave}`,
      `A${octave}`,
      `G#${octave}/Ab${octave}`,
      `G${octave}`,
      `F#${octave}/Gb${octave}`,
      `F${octave}`,
      `E${octave}`,
      `D#${octave}/Eb${octave}`,
      `D${octave}`,
      `C#${octave}/Db${octave}`,
      `C${octave}`,
    ]
    return toReturn;
  } 
}

export default NoteAtlas;