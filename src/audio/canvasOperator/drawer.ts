import { Shape } from "./shape";

export class Drawer
{
  public shapes: Shape[] = new Array<Shape>()
  public ctx: CanvasRenderingContext2D | null;
  public canvas: HTMLCanvasElement | null

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D)
  {
    this.ctx = ctx;
    this.canvas = canvas;
  }

  clear() : void
  {
    if(this.canvas!==null)
      this.ctx?.clearRect(0,0,this.canvas.width,this.canvas.height);
  }

  drawAll() : void
  {
    if(this.ctx == null)
      return;
    this.clear();
    this.shapes.sort((a,b) => b.zIndex - a.zIndex);
    this.shapes.forEach(element => {
      if(this.ctx!=null)
        element.draw(this.ctx);
    });
  }
}