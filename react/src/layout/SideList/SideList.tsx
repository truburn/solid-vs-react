import { useSideListStyles } from "@/layout/SideList";
import { useAppContext } from "@/layout/AppProvider";

export function SideList() {
  const { showList } = useAppContext();
  const classes = useSideListStyles();

  if (!showList) return null;
  return <div css={classes.root}>Side List</div>;
}
