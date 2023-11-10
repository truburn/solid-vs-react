import { EditRecipeProps } from "@/routes/EditRecipe";
import { PageHeader } from "@/library/PageHeader";
import { useClearSides } from "@/utils/common.hooks";

export function EditRecipe(props: EditRecipeProps) {
  useClearSides();
  
  return (
    <>
      <PageHeader title={`${props.isNew ? "New" : "Edit"} Recipe`} />
      <div>Add/Edit Form</div>
    </>
  );
}
