import IXlsxCellToJsonConverter from "./IXlsxCellToJsonConverter";

import { Cell } from "exceljs";
import CellModel from "../Models/CellModel";

export default class XlsxCellToJsonConverter
  implements IXlsxCellToJsonConverter {
  convert(cell: Cell): CellModel {
    let cellModel = new CellModel();
    cellModel.value = cell.text;

    return cellModel;
  }
}
