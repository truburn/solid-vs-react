import {
  SectionHeaderProps,
  useSectionHeaderStyles,
} from "@/elements/SectionHeader";
import { uniqueId } from "lodash";
import { useMemo, ElementType } from "react";

/** Section header component. H2 and below */
export function SectionHeader(props: SectionHeaderProps) {
  const { className, id, style, children, title, depth } = props;
  const classes = useSectionHeaderStyles();

  const Tag = useMemo<ElementType>(() => {
    let tmpDepth = 2;

    if (depth) {
      if (depth < 2) tmpDepth = 2;
      else if (depth > 6) tmpDepth = 6;
      else tmpDepth = depth;
    }

    return `h${tmpDepth}` as ElementType;
  }, [depth]);

  return (
    <Tag
      id={id ?? uniqueId(`section-header-${Tag}-`)}
      css={classes.root}
      className={className}
      style={style}
    >
      {children ?? title}
    </Tag>
  );
}
