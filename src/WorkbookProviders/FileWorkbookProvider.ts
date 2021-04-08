import IWorkbookProvider from "./IWorkbookProvider";
import { Workbook } from "exceljs";
import appRoot from "app-root-path";

export default class FileWorkbookProvider implements IWorkbookProvider {
  private readonly _fileName: string;

  constructor(fileName: string) {
    this._fileName = fileName;
  }

  private static resolvePath(path: string) {
    return appRoot.resolve(path);
  }

  async getWorkbook(): Promise<Workbook> {
    const workbook = new Workbook();
    const filePath = FileWorkbookProvider.resolvePath(this._fileName);
    await workbook.xlsx.readFile(filePath);
    return workbook;
  }
}
