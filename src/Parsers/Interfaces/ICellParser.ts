import { Cell } from "exceljs";
import { CellModel } from "@xlsx-model/models";

export default interface ICellParser {
  parse(cell?: Cell): CellModel;
}
