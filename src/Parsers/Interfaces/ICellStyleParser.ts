import { Cell } from "@shabashab/exceljs";
import { CellStyle } from "@xlsx-model/models";

export default interface ICellStyleParser {
  parse(cell: Cell): CellStyle;
}
