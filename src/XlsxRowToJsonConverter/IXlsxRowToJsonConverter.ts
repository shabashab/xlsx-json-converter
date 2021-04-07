import RowModel from "../Models/RowModel";
import { Row } from "exceljs";

export default interface IXlsxRowToJsonConverter {
  convert(row: Row): RowModel;
}
