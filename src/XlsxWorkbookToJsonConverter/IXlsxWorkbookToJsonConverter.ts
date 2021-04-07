import WorkbookModel from "../Models/WorkbookModel";
import { Workbook } from "exceljs";

export default interface IXlsxWorkbookToJsonConverter {
  convert(workbook: Workbook): WorkbookModel;
}
