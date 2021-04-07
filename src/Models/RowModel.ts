import CellModel from "./CellModel";
import Dictionary from "../Dictionary";

export default class RowModel {
  public cells: Dictionary<CellModel>;

  constructor(cells?: Dictionary<CellModel>) {
    this.cells = cells || new Dictionary<CellModel>();
  }
}
