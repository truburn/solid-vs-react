import { EditRecipeProps } from "@/routes/EditRecipe";
import { PageHeader } from "@/library/PageHeader";

export function EditRecipe(props: EditRecipeProps) {
  return (
    <>
      <PageHeader>{`${props.isNew ? "New" : "Edit"} Recipe`}</PageHeader>
    </>
  );
}
