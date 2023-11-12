import { useRecipeCardStyles, RecipeCardProps } from "@/library/RecipeCard";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export function RecipeCard(props: RecipeCardProps) {
  const { recipe, compact } = props;
  const classes = useRecipeCardStyles(compact);

  const summary = useMemo<string>(() => {
    const wordArray = recipe.summary?.split(" ") ?? [];
    const sumArray = wordArray.slice(0, 15);
    if (wordArray.length > sumArray.length) {
      sumArray.push("...");
    }
    return sumArray.join(" ");
  }, [recipe.summary]);

  return (
    <li css={classes.root}>
      <Link css={classes.card} to={`/recipe/${recipe.recipeID}`}>
        <p css={classes.title}>{recipe.name}</p>
        <div css={classes.meta}>
          <p>{recipe.author}</p>
          <p>{recipe.created?.toDateString()}</p>
        </div>
        {!compact && (
          <>
            <p css={classes.summary}>{summary}</p>
            <div css={classes.info}>
              <p css={classes.cuisine}>{recipe.cuisine}</p>
              <ul css={classes.meals}>
                {recipe.meal?.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </>
        )}
      </Link>
    </li>
  );
}
