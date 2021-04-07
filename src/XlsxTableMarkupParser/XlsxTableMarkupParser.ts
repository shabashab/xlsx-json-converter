import IXlsxTableMarkupParser from "./IXlsxTableMarkupParser";
import { Worksheet } from "exceljs";
import TableMarkup from "../Models/Markup/TableMarkup";

export default class XlsxTableMarkupParser implements IXlsxTableMarkupParser {
  convert(worksheet: Worksheet): TableMarkup {
    return (null as unknown) as TableMarkup;
  }
}
