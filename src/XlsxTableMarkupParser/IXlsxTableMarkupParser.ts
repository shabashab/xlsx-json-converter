import { Worksheet } from "exceljs";
import TableMarkup from "../Models/Markup/TableMarkup";

export default interface IXlsxTableMarkupParser {
  convert(worksheet: Worksheet): TableMarkup;
}
