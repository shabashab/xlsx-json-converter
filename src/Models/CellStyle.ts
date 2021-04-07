export class Border {
  public right: boolean = false;
  public left: boolean = false;
  public top: boolean = false;
  public bottom: boolean = false;

  public color: string | undefined;
  public width: number | undefined;
}

export default class CellStyle {
  public fillColor: string | undefined;
  public textColor: string | undefined;
  public fontSize: number | undefined;

  public border: Border;

  constructor(border?: Border) {
    this.border = border || new Border();
  }
}
