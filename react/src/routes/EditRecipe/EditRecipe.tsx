import { EditRecipeProps } from "@/routes/EditRecipe";
import { PageHeader } from "@/library/PageHeader";
import { useClearSides } from "@/utils/common.hooks";
import { Scrollbar } from "@/library/Scrollbar";

export function EditRecipe(props: EditRecipeProps) {
  useClearSides();

  return (
    <>
      <PageHeader title={`${props.isNew ? "New" : "Edit"} Recipe`} />
      <Scrollbar>
        <p>Add/Edit Form</p>
      </Scrollbar>
    </>
  );
}
