import { Worksheet } from "exceljs";
import { WorksheetModel } from "xlsx-model";

export default interface IWorksheetParser {
  parse(worksheet: Worksheet): WorksheetModel;
}
