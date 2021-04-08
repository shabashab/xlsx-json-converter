import IWorksheetParser from "./Interfaces/IWorksheetParser";
import { Worksheet } from "exceljs";
import { RowModel, WorksheetModel } from "xlsx-model";
import IRowParser from "./Interfaces/IRowParser";
import IWorksheetMarkupParser from "./Interfaces/IWorksheetMarkupParser";
import { Dictionary } from "typescript-collections";

export default class WorksheetParser implements IWorksheetParser {
  private _rowParser: IRowParser;
  private _markupParser: IWorksheetMarkupParser;

  constructor(rowParser: IRowParser, markupParser: IWorksheetMarkupParser) {
    this._rowParser = rowParser;
    this._markupParser = markupParser;
  }

  private parseRows(worksheet: Worksheet): Dictionary<number, RowModel> {
    let rows = new Dictionary<number, RowModel>();

    worksheet.eachRow((row) => {
      let rowId = row.number - 1;
      let rowModel = this._rowParser.parse(row);
      rows.setValue(rowId, rowModel);
    });

    return rows;
  }

  parse(worksheet: Worksheet): WorksheetModel {
    let rows = this.parseRows(worksheet);
    let markup = this._markupParser.parse(worksheet);
    let name = worksheet.name;

    return new WorksheetModel(markup, rows, name);
  }
}
