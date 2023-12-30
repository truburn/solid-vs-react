import { MealListProps, useMealListStyles } from "@/components/MealList";
import { useAppContext } from "@/layout/App";
import startCase from "lodash/startCase";
import uniqueId from "lodash/uniqueId";
import { useMemo } from "react";

/** List of meals or courses the recipe is recommended for as tokens */
export function MealList(_props: MealListProps) {
  const {
    className,
    style,
    meals,
    id = uniqueId("meal-list-"),
    ...props
  } = _props;
  const { recipe } = useAppContext();
  const classes = useMealListStyles(props);

  const list = useMemo<string[]>(() => {
    if (meals && meals.length) return meals.map((m) => startCase(m));
    if (recipe?.meal && recipe.meal.length > 0)
      return recipe.meal.map((m) => startCase(m));
    return ["Any"];
  }, [recipe, meals]);

  return (
    <ul css={classes.root} className={className} style={style} id={id}>
      {list.map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  );
}
