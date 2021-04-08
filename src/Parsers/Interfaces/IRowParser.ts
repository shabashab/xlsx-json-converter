import { Row } from "exceljs";
import { RowModel } from "xlsx-model";

export default interface IRowParser {
  parse(row: Row): RowModel;
}
