import { EditRecipeProps } from "@/routes/EditRecipe";

export function EditRecipe(props: EditRecipeProps) {
  return <div>{`${props.isNew ? "New" : "Edit"} Recipe`}</div>;
}
