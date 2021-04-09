import { Worksheet } from "exceljs";
import { TableMarkup } from "@xlsx-model/models";

export default interface IWorksheetMarkupParser {
  parse(worksheet: Worksheet): TableMarkup;
}
