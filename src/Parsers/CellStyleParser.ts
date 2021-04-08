import ICellStyleParser from "./Interfaces/ICellStyleParser";

import { Cell, Border as EJSBorder } from "exceljs";
import { CellStyle, Border, BorderPart } from "xlsx-model";

export default class CellStyleParser implements ICellStyleParser {
  private static parseFillColor(cell: Cell): string | undefined {
    if (cell.style.fill?.type == "pattern") {
      let cellFill = cell.style.fill;

      if (cellFill.pattern == "solid") {
        return cellFill.bgColor?.argb;
      }
    }
    return undefined;
  }

  private static parseBorderPart(
    border?: Partial<EJSBorder>,
  ): BorderPart | undefined {
    if (!border) return undefined;
    if (!border.style) return undefined;

    let borderPart = new BorderPart();

    switch (border.style) {
      case "thin":
        borderPart.width = 1;
        break;
      case "medium":
        borderPart.width = 2;
        break;
      case "thick":
        borderPart.width = 3;
        break;
      default:
        return undefined;
    }

    borderPart.color = border.color?.argb;
    return borderPart;
  }

  private static parseBorder(cell: Cell): Border {
    let border = new Border();

    border.left = CellStyleParser.parseBorderPart(cell.border.left);
    border.right = CellStyleParser.parseBorderPart(cell.border.right);
    border.top = CellStyleParser.parseBorderPart(cell.border.top);
    border.bottom = CellStyleParser.parseBorderPart(cell.border.bottom);

    return border;
  }

  parse(cell: Cell): CellStyle {
    let cellStyle = new CellStyle();

    cellStyle.border = CellStyleParser.parseBorder(cell);
    cellStyle.fillColor = CellStyleParser.parseFillColor(cell);
    cellStyle.fontSize = cell.style.font?.size;
    cellStyle.textColor = cell.style.font?.color?.argb;

    return cellStyle;
  }
}
