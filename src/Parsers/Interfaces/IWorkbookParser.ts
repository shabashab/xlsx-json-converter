import { Workbook } from "@shabashab/exceljs";
import { WorkbookModel } from "@xlsx-model/models";

export default interface IWorkbookParser {
  parse(workbook: Workbook): WorkbookModel;
}
