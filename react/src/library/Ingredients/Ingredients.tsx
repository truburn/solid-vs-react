import { IngredientsProps, useIngredientsStyles } from "@/library/Ingredients";
import { SectionHeader } from "@/library/SectionHeader";
import { Scrollbar } from "@/library/Scrollbar";

export function Ingredients(props: IngredientsProps) {
  const { ingredients = [] } = props;
  const classes = useIngredientsStyles();

  return (
    <div css={classes.root}>
      <SectionHeader title="What you need" />
      <div css={classes.content}>
        <Scrollbar>
          <ul>
            {ingredients.map(({ ingredientID, name }) => (
              <li key={ingredientID}>{name}</li>
            ))}
          </ul>
        </Scrollbar>
      </div>
    </div>
  );
}
