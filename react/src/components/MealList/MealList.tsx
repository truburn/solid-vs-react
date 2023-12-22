import { MealListProps, useMealListStyles } from "@/components/MealList";
import { useAppContext } from "@/layout/App";
import startCase from "lodash/startCase";
import uniqueId from "lodash/uniqueId";

/** List of meals or courses the recipe is recommended for as tokens */
export function MealList(_props: MealListProps) {
  const { className, style, id = uniqueId("meal-list-"), ...props } = _props;
  const { recipe } = useAppContext();
  const classes = useMealListStyles(props);

  if (!recipe?.meal) return null;

  return (
    <ul css={classes.root} className={className} style={style} id={id}>
      {recipe.meal.map((m) => (
        <li key={m}>{startCase(m)}</li>
      ))}
    </ul>
  );
}
