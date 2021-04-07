import IXlsxWorkbookProvider from "./IXlsxWorkbookProvider";
import IFilePathResolver from "../FilePathResolver/IFilePathResolver";
import { Workbook } from "exceljs";

export default class FileXlsxWorkbookProvider implements IXlsxWorkbookProvider {
  private readonly _fileName: string;
  private readonly _filePathResolver: IFilePathResolver;

  constructor(fileName: string, pathResolver: IFilePathResolver) {
    this._fileName = fileName;
    this._filePathResolver = pathResolver;
  }

  async getWorkbook(): Promise<Workbook> {
    const workbook = new Workbook();
    const filePath = this._filePathResolver.resolve(this._fileName);
    await workbook.xlsx.readFile(filePath);
    return workbook;
  }
}
