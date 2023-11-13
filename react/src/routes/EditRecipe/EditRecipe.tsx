import { EditRecipeProps, useEditRecipeStyles } from "@/routes/EditRecipe";
import { PageHeader } from "@/library/PageHeader";
import { useClearSides } from "@/utils/common.hooks";
import { Scrollbar } from "@/library/Scrollbar";
import { useMemo } from "react";
import { getDummyRecipes } from "@/dummyData";
import { useParams } from "react-router-dom";
import { Button } from "@/library/Button";

export function EditRecipe(props: EditRecipeProps) {
  const { isNew } = props;
  const { id } = useParams();
  useClearSides();
  const classes = useEditRecipeStyles();

  const recipe = useMemo<Recipe | undefined>(() => {
    if (!id) return undefined;

    const tmpRecipe = getDummyRecipes();
    console.log(tmpRecipe);
    return tmpRecipe as Recipe;
  }, [id]);

  const pageTitle = useMemo<string>(() => {
    if (isNew ?? !id ?? !recipe) return "New Recipe";

    return "Edit Recipe";
  }, [isNew, id, recipe]);

  return (
    <>
      <PageHeader title={pageTitle} />
      <Scrollbar>
        <p>Add/Edit Form</p>
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
