import { EditRecipeProps, useEditRecipeStyles } from "@/routes/EditRecipe";
import { PageHeader } from "@/library/PageHeader";
import { useClearSides } from "@/utils/common.hooks";
import { Scrollbar } from "@/library/Scrollbar";
import { useMemo, useState } from "react";
import { getDummyRecipes } from "@/dummyData";
import { useParams } from "react-router-dom";
import { Button } from "@/library/Button";
import { FormGroup } from "@/library/FormGroup";
import { FormInput } from "@/library/FormInput";
import { MealInput } from "@/library/MealInput";
import { ServingsInput } from "@/library/ServingsInput";
import { IngredientsInput } from "@/library/IngredientsInput";
import { StepsInput } from "@/library/StepsInput";

const DEFAULT_RECIPE: Recipe = {
  name: "My Awesome Recipe",
  author: "Anonymous",
};

export function EditRecipe(props: EditRecipeProps) {
  const { isNew } = props;
  const [recipe, setRecipe] = useState<Recipe>(DEFAULT_RECIPE);
  const { id } = useParams();
  useClearSides();
  const classes = useEditRecipeStyles();

  const prevRecipe = useMemo<Recipe | null>(() => {
    if (id) {
      const dummyRecipe = getDummyRecipes() as Recipe;
      setRecipe(dummyRecipe);
      return dummyRecipe;
    }

    return null;
  }, [id]);

  const setFieldValue = (fieldName: string, newValue: any) => {
    const tmpRecipe = {
      ...recipe,
      [fieldName]: newValue,
    };
    setRecipe(tmpRecipe);
  };

  return (
    <>
      <PageHeader title={isNew ?? !id ? "New Recipe" : "Edit Recipe"} />
      <Scrollbar>
        <FormGroup
          legend="Name"
          input={
            <FormInput
              name="name"
              value={recipe.name}
              updateField={setFieldValue}
            />
          }
          valueDisplay={prevRecipe && <p>{prevRecipe?.name}</p>}
        />
        <FormGroup
          legend="Author"
          input={
            <FormInput
              name="author"
              value={recipe.author}
              updateField={setFieldValue}
            />
          }
          valueDisplay={prevRecipe && <p>{prevRecipe?.author}</p>}
        />
        <FormGroup
          legend="Cuisine"
          info="Recipe origin or style"
          input={
            <FormInput
              name="cuisine"
              value={recipe.cuisine}
              updateField={setFieldValue}
            />
          }
          valueDisplay={prevRecipe && <p>{prevRecipe?.cuisine}</p>}
        />
        <FormGroup
          legend="Meal"
          info="Suggested meals to serve this dish"
          input={<MealInput value={recipe.meal} updateField={setFieldValue} />}
          valueDisplay={prevRecipe && <MealInput value={prevRecipe.meal} />}
        />
        <FormGroup
          legend="Servings"
          info="Number of servings and individual serving size"
          input={
            <ServingsInput
              updateField={setFieldValue}
              servingSizeValue={recipe.servingSize}
              servingsValue={recipe.servings}
            />
          }
          valueDisplay={
            prevRecipe && (
              <ServingsInput
                servingSizeValue={prevRecipe.servingSize}
                servingsValue={prevRecipe.servings}
              />
            )
          }
        />
        <FormGroup
          legend="Summary"
          info="Brief description of the recipe (Max 500 Characters)"
          input={
            <FormInput
              name="summary"
              value={recipe.summary}
              updateField={setFieldValue}
              multiline
            />
          }
          valueDisplay={
            prevRecipe && (
              <Scrollbar>
                <p>{prevRecipe?.summary}</p>
              </Scrollbar>
            )
          }
        />
        <FormGroup
          legend="Ingredients"
          info="List of ingredients and quantities"
          input={
            <IngredientsInput
              updateField={setFieldValue}
              value={recipe.ingredients}
            />
          }
          valueDisplay={
            prevRecipe && <IngredientsInput value={prevRecipe.ingredients} />
          }
        />
        <FormGroup
          legend="Steps"
          info="The steps to complete the recipe and supporting information"
          input={
            <StepsInput updateField={setFieldValue} value={recipe.steps} />
          }
          valueDisplay={prevRecipe && <StepsInput value={prevRecipe.steps} />}
        />
      </Scrollbar>
      <div css={classes.actions}>
        <div>
          <Button label="Reset" color="info" />
        </div>
        <div>
          <Button label="Cancel" color="error" />
          <Button label="Save" color="success" />
        </div>
      </div>
    </>
  );
}
