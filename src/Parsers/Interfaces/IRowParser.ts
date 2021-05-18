import { Row } from "@shabashab/exceljs";
import { RowModel } from "@xlsx-model/models";

export default interface IRowParser {
  parse(row: Row): RowModel;
}
