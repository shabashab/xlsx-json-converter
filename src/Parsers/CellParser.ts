import ICellParser from "./Interfaces/ICellParser";

import { Cell } from "exceljs";
import { CellModel } from "xlsx-model";

export default class CellParser implements ICellParser {
  parse(cell: Cell): CellModel {
    let cellModel = new CellModel();
    cellModel.value = cell.text;

    return cellModel;
  }
}
