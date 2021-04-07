import RowMarkup from "./RowMarkup";
import ColumnMarkup from "./ColumnMarkup";

import Dictionary from "../../Dictionary";

export default class TableMarkup {
  public rows: Dictionary<RowMarkup>;
  public columns: Dictionary<ColumnMarkup>;

  constructor(rows: Dictionary<RowMarkup>, columns: Dictionary<ColumnMarkup>) {
    this.rows = rows;
    this.columns = columns;
  }
}
