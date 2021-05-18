import { Workbook } from "@shabashab/exceljs";

export default interface IWorkbookProvider {
  getWorkbook(): Promise<Workbook>;
}
