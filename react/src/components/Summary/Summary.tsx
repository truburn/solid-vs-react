import { SummaryProps, useSummaryStyles } from "@/components/Summary";
import uniqueId from "lodash/uniqueId";
import { Scrollbar } from "@/elements/Scrollbar";
import { SectionHeader } from "@/elements/SectionHeader";
import { useAppContext } from "@/layout/App";

/** Render the recipe's summary inside a scrollbar container with an optional header */
export function Summary(props: SummaryProps) {
  const { className, style, id = uniqueId("summary-") } = props;
  const { recipe } = useAppContext();
  const classes = useSummaryStyles();

  if (!recipe?.summary) return null;

  return (
    <div css={classes.root} className={className} style={style} id={id}>
      <SectionHeader title="Summary" />
      <Scrollbar>
        <p css={classes.body}>{recipe.summary}</p>
      </Scrollbar>
    </div>
  );
}
