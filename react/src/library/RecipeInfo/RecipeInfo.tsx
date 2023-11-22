import { RecipeInfoProps, useRecipeInfoStyles } from "@/library/RecipeInfo";
import { SectionHeader } from "@/library/SectionHeader";
import { MealList } from "@/library/MealList";

export function RecipeInfo(props: RecipeInfoProps) {
  const {
    recipe: { cuisine, meal, author, created },
  } = props;
  const classes = useRecipeInfoStyles();

  return (
    <div css={classes.root}>
      <SectionHeader title="About" />
      <p css={classes.info}>
        <span css={classes.label}>Author:</span>
        {author}
      </p>
      <p css={classes.info}>
        <span css={classes.label}>Created:</span>
        {created?.toDateString()}
      </p>
      {cuisine && (
        <p css={classes.info}>
          <span css={classes.label}>Cuisine:</span>
          {cuisine}
        </p>
      )}
      {meal && (
        <div css={classes.info}>
          <p css={classes.label}>Meal:</p>
          <MealList meals={meal} />
        </div>
      )}
    </div>
  );
}
