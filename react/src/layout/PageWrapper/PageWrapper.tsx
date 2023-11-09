import { useAppContext } from "@/layout/AppProvider";
import { usePageStyles } from "@/layout/PageWrapper/PageWrapper.styles";
import { Footer } from "@/layout/Footer";
import { Navigation } from "@/layout/Navigation";
import { HeaderBar } from "@/layout/HeaderBar/HeaderBar";
import { Outlet } from "react-router-dom";

export function PageWrapper() {
  const { sidePanelContent } = useAppContext();
  const classes = usePageStyles();

  return (
    <>
      <div css={classes.root}>
        <Navigation />
        <div css={classes.content}>
          <HeaderBar />
          <div css={classes.page}>
            <div css={classes.outlet}>
              <Outlet />
            </div>
            <div css={classes.sidePanel}>{sidePanelContent}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
