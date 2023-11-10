import { EditRecipeProps } from "@/routes/EditRecipe";
import { PageHeader } from "@/library/PageHeader";

export function EditRecipe(props: EditRecipeProps) {
  return (
    <>
      <PageHeader title={`${props.isNew ? "New" : "Edit"} Recipe`} />
      <div>Add/Edit Form</div>
    </>
  );
}
