import { Worksheet } from "exceljs";
import { TableMarkup } from "xlsx-model";

export default interface IWorksheetMarkupParser {
  parse(worksheet: Worksheet): TableMarkup;
}
