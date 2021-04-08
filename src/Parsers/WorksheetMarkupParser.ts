import IWorksheetMarkupParser from "./Interfaces/IWorksheetMarkupParser";
import { Worksheet } from "exceljs";
import { ColumnMarkup, RowMarkup, TableMarkup } from "xlsx-model";
import { Dictionary } from "typescript-collections";

export default class WorksheetMarkupParser implements IWorksheetMarkupParser {
  private parseRowsMarkup(worksheet: Worksheet): Dictionary<number, RowMarkup> {
    let rowsMarkup = new Dictionary<number, RowMarkup>();

    worksheet.eachRow((row) => {
      let rowId = row.number - 1;

      let height = row.height;
      let level = row.outlineLevel;
      let collapsed = row.collapsed;

      let rowMarkup = new RowMarkup(height, level, collapsed);
      rowsMarkup.setValue(rowId, rowMarkup);
    });

    return rowsMarkup;
  }

  private parseColumnsMarkup(
    worksheet: Worksheet,
  ): Dictionary<number, ColumnMarkup> {
    let columnsMarkup = new Dictionary<number, ColumnMarkup>();

    worksheet.columns.forEach((column) => {
      if (typeof column.number === "undefined") return;
      let columnId: number = column.number;

      let width = column.width;
      let level = column.outlineLevel;
      let collapsed = column.collapsed;

      let columnMarkup = new ColumnMarkup(width, level, collapsed);
      columnsMarkup.setValue(columnId, columnMarkup);
    });

    return columnsMarkup;
  }

  parse(worksheet: Worksheet): TableMarkup {
    let rowsMarkup = this.parseRowsMarkup(worksheet);
    let columnsMarkup = this.parseColumnsMarkup(worksheet);

    return new TableMarkup(rowsMarkup, columnsMarkup);
  }
}
