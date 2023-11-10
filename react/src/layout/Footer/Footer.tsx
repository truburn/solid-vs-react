import { faCopyright } from '@fortawesome/pro-light-svg-icons';
import { useFooterStyles } from "@/layout/Footer";
import { Icon } from "@/library/Icon";

export function Footer() {
  const classes = useFooterStyles();

  return (
    <footer css={classes.root}>
      <p>
        Copyright <Icon icon={faCopyright} /> 2023 by jsburn
      </p>
      <p>React</p>
    </footer>
  );
}
