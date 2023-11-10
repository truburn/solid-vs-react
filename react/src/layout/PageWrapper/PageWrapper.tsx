import { usePageStyles } from "@/layout/PageWrapper/PageWrapper.styles";
import { Footer } from "@/layout/Footer";
import { SideList } from "@/layout/SideList";
import { Outlet } from "react-router-dom";
import { InfoPanel } from "@/layout/InfoPanel";

export function PageWrapper() {
  const classes = usePageStyles();

  return (
    <>
      <div css={classes.root}>
        <div css={classes.content}>
          <div css={classes.page}>
            <div css={classes.sidePanel}>
              <SideList />
            </div>
            <div css={classes.outlet}>
              <Outlet />
            </div>
            <div css={classes.sidePanel}>
              <InfoPanel />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
