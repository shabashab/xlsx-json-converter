import Dictionary from "../Dictionary";
import RowModel from "./RowModel";
import TableMarkup from "./Markup/TableMarkup";

export default class WorksheetModel {
  public rows: Dictionary<RowModel>;
  public tableMarkup: TableMarkup;
  public name: string;

  constructor(
    tableMarkup: TableMarkup,
    rows: Dictionary<RowModel>,
    name: string,
  ) {
    this.rows = rows;
    this.tableMarkup = tableMarkup;
    this.name = name;
  }
}
