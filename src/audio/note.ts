class Note {
  public frequency : number;
  public name : string;
  public id! : number;

  constructor(name: string, frequency: number) {
    this.name = name;
    this.frequency = frequency;
  }
}

export default Note;