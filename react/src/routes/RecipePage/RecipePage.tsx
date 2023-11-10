import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";

export function RecipePage() {
  return (
    <>
      <PageHeader title="Recipe" />
      <Scrollbar>Recipe content</Scrollbar>
    </>
  );
}
