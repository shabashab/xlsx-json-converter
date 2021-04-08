import { WorkbookModel } from "xlsx-model";

export default interface IXlsxModelParser {
  parse(): Promise<WorkbookModel>;
}
