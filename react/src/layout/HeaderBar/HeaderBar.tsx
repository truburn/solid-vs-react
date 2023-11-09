import { useHeaderBarStyles } from "@/layout/HeaderBar";
import { useAppContext } from "@/layout/AppProvider";

export function HeaderBar() {
  const { searchString } = useAppContext();
  const classes = useHeaderBarStyles();

  return (
    <div css={classes.root}>
      <div css={classes.searchWrapper}>Search Wrapper: {searchString}</div>
      <div css={classes.userToolsWrapper}>User Tools</div>
    </div>
  );
}
