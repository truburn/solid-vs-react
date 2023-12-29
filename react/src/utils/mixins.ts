import chroma from "chroma-js";

export function colorOpacity(color: string, opacity: number): string {
  const chromaColor = chroma(color).alpha(opacity).rgba();
  return `rgba(${chromaColor.join(",")})`;
}

type SizingTypes = number | string;

interface SizingProps {
  all?: SizingTypes;
  horizontal?: SizingTypes;
  vertical?: SizingTypes;
  top?: SizingTypes;
  bottom?: SizingTypes;
  left?: SizingTypes;
  right?: SizingTypes;
}

type SizesProps = SizingTypes | SizingTypes[] | SizingProps;

function getSizes(sizes: SizingProps | SizingTypes[]) {
  let tmpSizes: SizingProps = {};

  if (Array.isArray(sizes)) {
    if (sizes.length === 2) {
      tmpSizes.vertical = sizes[0];
      tmpSizes.horizontal = sizes[1];
    } else if (sizes.length === 4) {
      tmpSizes.top = sizes[0];
      tmpSizes.right = sizes[1];
      tmpSizes.bottom = sizes[2];
      tmpSizes.left = sizes[3];
    }
  } else {
    tmpSizes = sizes;
  }

  const defaultSize = tmpSizes.all ?? 0;
  let top: SizingTypes = defaultSize;
  let bottom: SizingTypes = defaultSize;
  let left: SizingTypes = defaultSize;
  let right: SizingTypes = defaultSize;

  if (tmpSizes.horizontal) {
    left = tmpSizes.horizontal;
    right = tmpSizes.horizontal;
  }

  if (tmpSizes.vertical) {
    top = tmpSizes.vertical;
    bottom = tmpSizes.vertical;
  }

  if (tmpSizes.top) top = tmpSizes.top;
  if (tmpSizes.bottom) bottom = tmpSizes.bottom;
  if (tmpSizes.left) left = tmpSizes.left;
  if (tmpSizes.right) right = tmpSizes.right;

  return { top, bottom, left, right };
}

export function spacing(propName: "margin" | "padding", sizes: SizesProps) {
  const property = propName ?? "margin";

  if (typeof sizes !== "object") return { [property]: sizes };

  const { top, bottom, left, right } = getSizes(sizes);

  return {
    [`${property}Top`]: top,
    [`${property}Bottom`]: bottom,
    [`${property}Left`]: left,
    [`${property}Right`]: right,
  };
}

export function borderWidths(sizes: SizesProps) {
  if (typeof sizes !== "object") return { borderWidth: sizes };

  const { top, bottom, left, right } = getSizes(sizes);

  return {
    borderTopWidth: top,
    borderBottomWidth: bottom,
    borderLeftWidth: left,
    borderRightWidth: right,
  };
}
