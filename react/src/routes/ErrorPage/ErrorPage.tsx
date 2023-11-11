import { useClearSides } from "@/utils/common.hooks";
import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";
import { useRouteError } from "react-router-dom";
import { useEffect } from "react";
import { useErrorPageStyles } from "@/routes/ErrorPage";

export function ErrorPage() {
  const classes = useErrorPageStyles();
  const error: Error = useRouteError() as Error;
  useClearSides();

  useEffect(() => {
    console.log("Error Page", error.name);
  }, [error])

  return (
    <>
      <PageHeader title="Error Page" />
      <Scrollbar>
        {error.stack?.split("\n").map((errLine, idx) => (
          <p key={idx} css={classes.stackLine}>{errLine}</p>
        ))}
      </Scrollbar>
    </>
  );
}
