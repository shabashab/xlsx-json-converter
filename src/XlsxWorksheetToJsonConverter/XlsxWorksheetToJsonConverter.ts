import IXlsxRowToJsonConverter from "../XlsxRowToJsonConverter/IXlsxRowToJsonConverter";
import IXlsxWorksheetToJsonConverter from "./IXlsxWorksheetToJsonConverter";
import IXlsxTableMarkupParser from "../XlsxTableMarkupParser/IXlsxTableMarkupParser";
import WorksheetModel from "../Models/WorksheetModel";
import Dictionary from "../Dictionary";
import RowModel from "../Models/RowModel";

import { Row, Worksheet } from "exceljs";
import TableMarkup from "../Models/Markup/TableMarkup";

export default class XlsxWorksheetToJsonConverter
  implements IXlsxWorksheetToJsonConverter {
  private _rowConverter: IXlsxRowToJsonConverter;
  private _tableMarkupParser: IXlsxTableMarkupParser;

  constructor(
    rowConverter: IXlsxRowToJsonConverter,
    tableMarkupParser: IXlsxTableMarkupParser,
  ) {
    this._rowConverter = rowConverter;
    this._tableMarkupParser = tableMarkupParser;
  }

  private parseRows(worksheet: Worksheet): Dictionary<RowModel> {
    let rows = new Dictionary<RowModel>();

    worksheet.eachRow((row: Row) => {
      rows[row.number - 1] = this._rowConverter.convert(row);
    });

    return rows;
  }

  private parseTableMarkup(worksheet: Worksheet): TableMarkup {
    return this._tableMarkupParser.convert(worksheet);
  }

  convert(worksheet: Worksheet): WorksheetModel {
    let rows = this.parseRows(worksheet);
    let tableMarkup = this.parseTableMarkup(worksheet);

    return new WorksheetModel(tableMarkup, rows, worksheet.name);
  }
}
