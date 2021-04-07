import XlsxWorkbookToJsonConverter from "./XlsxWorkbookToJsonConverter/XlsxWorkbookToJsonConverter";
import XlsxWorksheetToJsonConverter from "./XlsxWorksheetToJsonConverter/XlsxWorksheetToJsonConverter";
import XlsxRowToJsonConverter from "./XlsxRowToJsonConverter/XlsxRowToJsonConverter";
import XlsxTableMarkupParser from "./XlsxTableMarkupParser/XlsxTableMarkupParser";
import XlsxCellToJsonConverter from "./XlsxCellToJsonConverter/XlsxCellToJsonConverter";

import FileXlsxWorkbookProvider from "./XlsxWorkbookProviders/FileXlsxWorkbookProvider";
import FilePathResolver from "./FilePathResolver/FilePathResolver";

let markupParser = new XlsxTableMarkupParser();
let cellConverter = new XlsxCellToJsonConverter();
let rowConverter = new XlsxRowToJsonConverter(cellConverter);
let worksheetConverter = new XlsxWorksheetToJsonConverter(
  rowConverter,
  markupParser,
);
let workbookConverter = new XlsxWorkbookToJsonConverter(worksheetConverter);

let workbookProvider = new FileXlsxWorkbookProvider(
  "file2.xlsx",
  new FilePathResolver(),
);

async function run() {
  let workbook = await workbookProvider.getWorkbook();
  let workbookModel = workbookConverter.convert(workbook);
  console.log(workbookModel);
}

run().then(() => {});
