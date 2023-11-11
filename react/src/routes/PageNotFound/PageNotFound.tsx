import { useClearSides } from "@/utils/common.hooks";
import { usePageNotFoundStyles } from "@/routes/PageNotFound";
import { Icon } from "@/library/Icon";
import { faPlateUtensils } from "@fortawesome/pro-duotone-svg-icons";
import { useRedirectToHome } from "@/routes/PageNotFound";
import { Link } from "react-router-dom";

export function PageNotFound() {
  const timeLeft = useRedirectToHome(15);
  const classes = usePageNotFoundStyles();
  useClearSides();

  return (
    <div css={classes.root}>
      Oops! Your plate is empty!
      <Icon icon={faPlateUtensils} css={classes.icon} />
      <p css={classes.redirect}>
        Redirecting to recipes list in {timeLeft} seconds.
        <Link to="/">Go to recipes list now.</Link>
      </p>
    </div>
  );
}
