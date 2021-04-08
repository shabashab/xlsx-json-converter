import { Workbook } from "exceljs";

export default interface IWorkbookProvider {
  getWorkbook(): Promise<Workbook>;
}
