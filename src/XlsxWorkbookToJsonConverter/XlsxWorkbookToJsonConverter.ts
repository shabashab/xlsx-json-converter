import IXlsxWorkbookToJsonConverter from "./IXlsxWorkbookToJsonConverter";
import IXlsxWorksheetToJsonConverter from "../XlsxWorksheetToJsonConverter/IXlsxWorksheetToJsonConverter";

import WorkbookModel from "../Models/WorkbookModel";

import { Workbook } from "exceljs";

export default class XlsxWorkbookToJsonConverter
  implements IXlsxWorkbookToJsonConverter {
  private _worksheetConverter: IXlsxWorksheetToJsonConverter;

  constructor(worksheetConverter: IXlsxWorksheetToJsonConverter) {
    this._worksheetConverter = worksheetConverter;
  }

  convert(workbook: Workbook): WorkbookModel {
    let workbookModel = new WorkbookModel();

    workbook.eachSheet((worksheet) => {
      let worksheetModel = this._worksheetConverter.convert(worksheet);
      workbookModel.worksheets.push(worksheetModel);
    });

    return workbookModel;
  }
}
