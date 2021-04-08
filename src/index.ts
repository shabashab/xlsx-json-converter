import FileXlsxWorkbookProvider from "./XlsxWorkbookProviders/FileXlsxWorkbookProvider";

import WorkbookParser from "./Parsers/WorkbookParser";
import WorksheetParser from "./Parsers/WorksheetParser";
import RowParser from "./Parsers/RowParser";
import CellParser from "./Parsers/CellParser";
import WorksheetMarkupParser from "./Parsers/WorksheetMarkupParser";
import FilePathResolver from "./FilePathResolver/FilePathResolver";

let cellParser = new CellParser();
let rowParser = new RowParser(cellParser);
let markupParser = new WorksheetMarkupParser();
let worksheetParser = new WorksheetParser(rowParser, markupParser);
let workbookParser = new WorkbookParser(worksheetParser);

let workbookProvider = new FileXlsxWorkbookProvider(
  "file.xlsx",
  new FilePathResolver(),
);

async function run() {
  let workbook = await workbookProvider.getWorkbook();
  let workbookModel = workbookParser.parse(workbook);
  console.log(workbookModel);
}

run().then(() => {});
