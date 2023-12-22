import { Content } from "@/layout/Content";
import { Scrollbar } from "@/elements/Scrollbar";
import { useRouteError } from "react-router-dom";
import { useErrorPageStyles } from "@/pages/ErrorPage";

/** Page to display when an error occurs with appropriate details */
export function ErrorPage() {
  const classes = useErrorPageStyles();
  const error = useRouteError() as Error;

  return (
    <Content title="Error Page">
      <Scrollbar>
        {error.stack?.split("\n").map((errLine, idx) => (
          <p key={idx} css={classes.stackLine}>
            {errLine}
          </p>
        ))}
      </Scrollbar>
    </Content>
  );
}
