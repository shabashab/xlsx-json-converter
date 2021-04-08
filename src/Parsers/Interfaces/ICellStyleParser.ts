import { Cell } from "exceljs";
import { CellStyle } from "xlsx-model";

export default interface ICellStyleParser {
  parse(cell: Cell): CellStyle;
}
