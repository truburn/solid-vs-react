export interface EditRecipeProps {
  isNew?: boolean;
}

export type UpdateField = (field: string, newValue: any) => void;
