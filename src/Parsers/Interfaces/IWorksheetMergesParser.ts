import { Worksheet } from "exceljs";
import { WorksheetModel } from "xlsx-model";

export default interface IWorksheetMergesParser {
  parse(
    worksheet: Worksheet,
    inputModel: WorksheetModel,
  ): WorksheetModel | undefined;
}
