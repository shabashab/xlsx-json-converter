import { Row } from "exceljs";
import { RowModel } from "@xlsx-model/models";

export default interface IRowParser {
  parse(row: Row): RowModel;
}
