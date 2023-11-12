import {
  SectionHeaderProps,
  useSectionHeaderStyles,
} from "@/library/SectionHeader";

export function SectionHeader(props: SectionHeaderProps) {
  const { title } = props;
  const classes = useSectionHeaderStyles();

  return <h2 css={classes.root}>{title}</h2>;
}
