import { MealListProps, useMealListStyles } from "@/library/MealList";
import capitalize from "lodash/capitalize";

export function MealList(props: MealListProps) {
  const { meals, color, align } = props;
  const classes = useMealListStyles({
    colorKey: color,
    alignRight: align === "right",
  });

  if (!meals) return null;

  return (
    <ul css={classes.root}>
      {meals?.map((m) => <li key={m}>{capitalize(m)}</li>)}
    </ul>
  );
}
