import { Workbook } from "exceljs";
import { WorkbookModel } from "xlsx-model";

export default interface IWorkbookParser {
  parse(workbook: Workbook): WorkbookModel;
}
