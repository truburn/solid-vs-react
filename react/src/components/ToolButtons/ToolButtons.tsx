import {
  ToolButtonsProps,
  useToolButtonsStyles,
} from "@/components/ToolButtons";

/** Buttons for actions to perform on a recipe */
export function ToolButtons(props: ToolButtonsProps) {
  const classes = useToolButtonsStyles();

  return <div css={classes.root}>Tool Buttons</div>;
}
