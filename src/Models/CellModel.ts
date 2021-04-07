export default class CellModel {
  public value: string;
  public rowSpan: number;
  public columnSpan: number;

  constructor(value: string, rowSpan: number, columnSpan: number) {
    this.value = value;
    this.rowSpan = rowSpan;
    this.columnSpan = columnSpan;
  }
}
