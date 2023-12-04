import { useFooterStyles } from "@/layout/Footer";

/** The site footer section */
export function Footer() {
  const classes = useFooterStyles();

  return <footer css={classes.root}>Site Footer</footer>;
}
