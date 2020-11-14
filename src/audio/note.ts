class Note {
  public frequency : number;
  public name : string;
  public id! : number;

  constructor(name: string, frequency: number, id: number) {
    this.name = name;
    this.frequency = frequency;
    this.id = id;
  }
}

export default Note;