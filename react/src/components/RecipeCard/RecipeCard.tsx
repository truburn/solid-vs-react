import { MealList } from "@/components/MealList";
import { RecipeCardProps, useRecipeCardStyles } from "@/components/RecipeCard";
import { DateTime } from "@/elements/DateTime";
import uniqueId from "lodash/uniqueId";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export function RecipeCard(_props: RecipeCardProps) {
  const { recipe, id, colorKey, ...props } = _props;
  const classes = useRecipeCardStyles(colorKey);

  const elID = useMemo<string>(() => {
    const idPrefix = "recipe-card-";
    if (id) return id;
    if (recipe) return `${idPrefix}${recipe.recipeID}`;
    return uniqueId(idPrefix);
  }, [recipe, id]);

  if (!recipe) return null;

  return (
    <Link
      to={`/recipe/${recipe.recipeID}`}
      css={classes.root}
      {...props}
      id={elID}
    >
      <p css={classes.heading}>{recipe.name}</p>
      <div css={classes.info}>
        <MealList meals={recipe.meal} colorKey={colorKey} />
        <span css={classes.cuisine}>{recipe.cuisine}</span>
      </div>
      <div css={classes.content}>
        <p css={classes.summary}>{recipe.summary}</p>
        <div css={classes.meta}>
          <p>{recipe.author}</p>
          <DateTime date={recipe.created} />
        </div>
      </div>
    </Link>
  );
}
