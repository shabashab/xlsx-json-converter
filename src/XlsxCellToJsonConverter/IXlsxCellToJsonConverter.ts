import { Cell } from "exceljs";
import CellModel from "../Models/CellModel";

export default interface IXlsxCellToJsonConverter {
  convert(cell: Cell): CellModel;
}
