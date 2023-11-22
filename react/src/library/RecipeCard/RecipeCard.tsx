import { useRecipeCardStyles, RecipeCardProps } from "@/library/RecipeCard";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { MealList } from "@/library/MealList";

export function RecipeCard(props: RecipeCardProps) {
  const { recipe, compact } = props;
  const classes = useRecipeCardStyles(compact);

  const summary = useMemo<string | undefined>(() => {
    const fullLength = recipe.summary?.length ?? 0;
    const maxLength = compact ? 60 : 120;
    let tmpSummary = recipe.summary?.substring(0, maxLength);

    if (fullLength > maxLength) {
      tmpSummary += "...";
    }

    return tmpSummary;
  }, [recipe.summary, compact]);

  return (
    <li css={classes.root}>
      <Link css={classes.card} to={`/recipe/${recipe.recipeID}`}>
        <p css={classes.title}>{recipe.name}</p>
        {!compact && (
          <div css={classes.meta}>
            <p>{recipe.author}</p>
            <p>{recipe.created?.toDateString()}</p>
          </div>
        )}
        <p css={classes.summary}>{summary}</p>
        <div css={classes.info}>
          <p css={classes.cuisine}>{recipe.cuisine}</p>
          <MealList
            meals={recipe.meal}
            color="secondary"
            align={compact ? "left" : "right"}
          />
        </div>
      </Link>
    </li>
  );
}
