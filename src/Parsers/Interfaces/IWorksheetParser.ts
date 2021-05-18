import { Worksheet } from "@shabashab/exceljs";
import { WorksheetModel } from "@xlsx-model/models";

export default interface IWorksheetParser {
  parse(worksheet: Worksheet): WorksheetModel;
}
