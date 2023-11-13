import { IngredientsProps, useIngredientsStyles } from "@/library/Ingredients";
import { SectionHeader } from "@/library/SectionHeader";
import { Scrollbar } from "@/library/Scrollbar";
import { useEffect } from "react";

export function Ingredients(props: IngredientsProps) {
  const { ingredients = [] } = props;
  const classes = useIngredientsStyles();

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <div css={classes.root}>
      <SectionHeader title="What you need" />
      <div css={classes.content}>
        <Scrollbar>
          <ul css={classes.list}>
            {ingredients.map((ing) => (
              <li key={ing.ingredientID} title={ing.summary}>
                  {`${ing.qty} ${ing.unit} ${ing.name}`}
              </li>
            ))}
          </ul>
        </Scrollbar>
      </div>
    </div>
  );
}
