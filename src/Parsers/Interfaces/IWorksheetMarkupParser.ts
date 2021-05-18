import { Worksheet } from "@shabashab/exceljs";
import { TableMarkup } from "@xlsx-model/models";

export default interface IWorksheetMarkupParser {
  parse(worksheet: Worksheet): TableMarkup;
}
