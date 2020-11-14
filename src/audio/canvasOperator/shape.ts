
export interface Shape
{
  zIndex: number;
  draw(ctx? : CanvasRenderingContext2D) : void;
}

export class Rect implements Shape
{
  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public color: string;
  zIndex: number;

  constructor(x: number,y: number, w: number,h: number, c:string , z:number)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.zIndex = z;
    this.color = c;
  }

  draw(ctx?: CanvasRenderingContext2D): void {
    if(ctx == null)
      return;

    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}