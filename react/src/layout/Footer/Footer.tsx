import { Icon } from "@/elements/Icon";
import { useFooterStyles } from "@/layout/Footer";
import { faCopyright } from "@fortawesome/pro-regular-svg-icons";

/** The site footer section */
export function Footer() {
  const classes = useFooterStyles();

  return (
    <footer css={classes.root}>
      <p>
        <Icon css={classes.icon} icon={faCopyright} />
        2023 jsburn.com
      </p>
      <p>Recipe Site &mdash; React Version</p>
    </footer>
  );
}
