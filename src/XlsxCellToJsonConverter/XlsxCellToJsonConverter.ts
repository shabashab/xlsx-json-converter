import IXlsxCellToJsonConverter from "./IXlsxCellToJsonConverter";

import { Cell } from "exceljs";
import CellModel from "../Models/CellModel";

export default class XlsxCellToJsonConverter
  implements IXlsxCellToJsonConverter {
  convert(cell: Cell): CellModel {
    return new CellModel(cell.text, 0, 0);
  }
}
