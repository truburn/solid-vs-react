import { useRecipeCardStyles } from "@/library/RecipeCard";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export function RecipeCard(props: Recipe) {
  const classes = useRecipeCardStyles();

  const summary = useMemo<string>(() => {
    const wordArray = props.summary?.split(" ") ?? [];
    const sumArray = wordArray.slice(0, 15);
    if (wordArray.length > sumArray.length) {
      sumArray.push("...");
    }
    return sumArray.join(" ");
  }, [props.summary]);

  return (
    <Link css={classes.root} to={`/recipe/${props.recipeID}`}>
      <p css={classes.title}>{props.name}</p>
      <div css={classes.meta}>
        <p>{props.author}</p>
        <p>{props.created?.toDateString()}</p>
      </div>
      <p css={classes.summary}>{summary}</p>
      <div css={classes.info}>
        <p css={classes.cuisine}>{props.cuisine}</p>
        <ul css={classes.meals}>
          {props.meal?.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </div>
    </Link>
  )
}
