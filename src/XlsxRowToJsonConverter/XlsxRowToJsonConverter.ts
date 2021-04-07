import IXlsxRowToJsonConverter from "./IXlsxRowToJsonConverter";
import IXlsxCellToJsonConverter from "../XlsxCellToJsonConverter/IXlsxCellToJsonConverter";

import { Row } from "exceljs";

import RowModel from "../Models/RowModel";

export default class XlsxRowToJsonConverter implements IXlsxRowToJsonConverter {
  private _cellConverter: IXlsxCellToJsonConverter;

  constructor(cellConverter: IXlsxCellToJsonConverter) {
    this._cellConverter = cellConverter;
  }

  convert(row: Row): RowModel {
    let rowModel = new RowModel();

    row.eachCell((cell) => {
      let columnNum = parseInt(cell.col);
      if (cell.isMerged && cell.master !== cell) return;

      rowModel.cells[columnNum - 1] = this._cellConverter.convert(cell);
    });

    return rowModel;
  }
}
