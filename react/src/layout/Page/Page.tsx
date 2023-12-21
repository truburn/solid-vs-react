import { usePageStyles } from "@/layout/Page";
import { Footer } from "@/layout/Footer";
import { Outlet } from "react-router-dom";

/** The main wrapper for each application page */
export function Page() {
  const classes = usePageStyles();

  return (
    <>
      <div css={classes.root}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
