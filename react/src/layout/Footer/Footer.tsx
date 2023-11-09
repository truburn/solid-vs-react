import { useFooterStyles } from "@/layout/Footer";

export function Footer() {
  const classes = useFooterStyles();

  return <footer css={classes.root}>React</footer>;
}
