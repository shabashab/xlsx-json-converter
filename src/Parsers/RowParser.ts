import IRowParser from "./Interfaces/IRowParser";
import { Row } from "exceljs";
import { RowModel } from "@xlsx-model/models";
import ICellParser from "./Interfaces/ICellParser";

export default class RowParser implements IRowParser {
  private _cellParser: ICellParser;

  constructor(cellParser: ICellParser) {
    this._cellParser = cellParser;
  }

  parse(row: Row): RowModel {
    let rowModel = new RowModel();

    row.eachCell((cell) => {
      let columnNum = parseInt(cell.col) - 1;
      if (cell.isMerged && cell.master !== cell) return;

      let cellModel = this._cellParser.parse(cell);

      rowModel.cells.setValue(columnNum, cellModel);
    });

    return rowModel;
  }
}
