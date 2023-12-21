import { usePageNotFoundStyles, useRedirectToHome } from "@/pages/PageNotFound";
import { Icon } from "@/elements/Icon";
import { faPlateUtensils } from "@fortawesome/pro-duotone-svg-icons";
import { Link } from "react-router-dom";

/** Custom 404 Page */
export function PageNotFound() {
  const timeLeft = useRedirectToHome(15);
  const classes = usePageNotFoundStyles();

  return (
    <div css={classes.root}>
      <h1 css={classes.title}>Oops! Your plate it empty!</h1>
      <Icon icon={faPlateUtensils} css={classes.icon} />
      <p css={classes.redirect}>
        Redirecting to recipes list in {timeLeft} seconds.
        <Link to="/">Go to recipes list now.</Link>
      </p>
    </div>
  );
}
