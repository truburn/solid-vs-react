import { useScrollbarStyles, ScrollbarProps } from "@/library/Scrollbar";

export function Scrollbar(props: ScrollbarProps) {
  const classes = useScrollbarStyles();

  return (
    <div css={classes.root}>
      {props.children}
    </div>
  )
}
