import { InfoProps, useInfoStyles } from "@/components/Info";

/** Display a block with the recipe's additional information */
export function Info(props: InfoProps) {
  const classes = useInfoStyles();

  return <div css={classes.root}>Info</div>;
}
