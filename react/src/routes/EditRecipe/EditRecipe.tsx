import { Button } from "@/library/Button";
import { FormGroup } from "@/library/FormGroup";
import { FormInput } from "@/library/FormInput";
import { FormTextarea } from "@/library/FormTextarea";
import { IngredientsInput } from "@/library/IngredientsInput";
import { MealInput } from "@/library/MealInput";
import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";
import { ServingsInput } from "@/library/ServingsInput";
import { StepsInput } from "@/library/StepsInput";
import {
  useEditRecipe,
  useEditRecipeStyles,
  usePrevRecipe,
} from "@/routes/EditRecipe";
import { useClearSides } from "@/utils/common.hooks";
import { Form, useParams } from "react-router-dom";

export function EditRecipe() {
  useClearSides();
  const { recipeID } = useParams();
  const classes = useEditRecipeStyles();
  const prevRecipe = usePrevRecipe(recipeID);
  const {
    recipe,
    updateRecipe,
    disableButtons,
    resetForm,
    cancelForm,
    fieldState,
  } = useEditRecipe(prevRecipe);

  return (
    <>
      <PageHeader title={!recipeID ? "New Recipe" : "Edit Recipe"} />
      <Form method="post" css={classes.root}>
        <Scrollbar>
          <FormGroup
            legend="Name"
            input={
              <FormInput
                name="name"
                value={recipe.name}
                updateField={updateRecipe}
              />
            }
            valueDisplay={
              prevRecipe && <p css={classes.value}>{prevRecipe?.name}</p>
            }
            fieldState={fieldState("name")}
            error={
              fieldState("name") === "error"
                ? "Don't forget to name your recipe!"
                : undefined
            }
          />
          <FormGroup
            legend="Author"
            input={
              <FormInput
                name="author"
                value={recipe.author}
                updateField={updateRecipe}
              />
            }
            valueDisplay={
              prevRecipe && <p css={classes.value}>{prevRecipe?.author}</p>
            }
            fieldState={fieldState("author")}
          />
          <FormGroup
            legend="Cuisine"
            info="Recipe origin or style"
            input={
              <FormInput
                name="cuisine"
                value={recipe.cuisine}
                updateField={updateRecipe}
              />
            }
            valueDisplay={
              prevRecipe && <p css={classes.value}>{prevRecipe?.cuisine}</p>
            }
            fieldState={fieldState("cuisine")}
          />
          <FormGroup
            legend="Meal"
            info="Suggested meal times and/or courses to serve this dish"
            input={<MealInput value={recipe.meal} updateField={updateRecipe} />}
            valueDisplay={prevRecipe && <MealInput value={prevRecipe.meal} />}
            fieldState={fieldState("meal")}
          />
          <FormGroup
            legend="Servings"
            info="Number of servings and individual serving size"
            input={
              <ServingsInput
                updateField={updateRecipe}
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
            info="Brief description of the recipe"
            input={
              <FormTextarea
                name="summary"
                value={recipe.summary}
                updateField={updateRecipe}
              />
            }
            valueDisplay={
              prevRecipe && (
                <Scrollbar>
                  <p>{prevRecipe?.summary}</p>
                </Scrollbar>
              )
            }
            fieldState={fieldState("summary")}
          />
          <FormGroup
            legend="Ingredients"
            info="List of ingredients and quantities"
            input={
              <IngredientsInput
                updateField={updateRecipe}
                value={recipe.ingredients}
              />
            }
            valueDisplay={
              prevRecipe && <IngredientsInput value={prevRecipe.ingredients} />
            }
            fieldState={fieldState("ingredients")}
          />
          <FormGroup
            legend="Steps"
            info="The steps to complete the recipe and supporting information"
            input={
              <StepsInput updateField={updateRecipe} value={recipe.steps} />
            }
            valueDisplay={prevRecipe && <StepsInput value={prevRecipe.steps} />}
            fieldState={fieldState("steps")}
          />
        </Scrollbar>
        <div css={classes.actions}>
          <div>
            <Button
              label="Reset"
              color="info"
              disabled={disableButtons}
              onClick={resetForm}
            />
          </div>
          <div>
            <Button label="Cancel" color="error" onClick={cancelForm} />
            <Button
              label="Save"
              isSubmit
              color="success"
              disabled={disableButtons}
            />
          </div>
        </div>
      </Form>
    </>
  );
}
