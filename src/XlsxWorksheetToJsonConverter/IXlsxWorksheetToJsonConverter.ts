import { Worksheet } from "exceljs";
import WorksheetModel from "../Models/WorksheetModel";

export default interface IXlsxWorksheetToJsonConverter {
  convert(worksheet: Worksheet): WorksheetModel;
}
