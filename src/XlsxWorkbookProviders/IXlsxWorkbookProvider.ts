import { Workbook } from "exceljs";

export default interface IXlsxWorkbookProvider {
  getWorkbook(): Promise<Workbook>;
}
