import { PageHeader } from "@/library/PageHeader";
import { RecipeTools } from "@/library/RecipeTools";
import { Scrollbar } from "@/library/Scrollbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "@/layout/AppProvider";

export function RecipePage() {
  const { setShowList, setSidePanelContent } = useAppContext();
  const params = useParams();

  useEffect(() => {
    setShowList(true);
    setSidePanelContent(true);
  }, []);

  return (
    <>
      <PageHeader title="Recipe" />
      <RecipeTools tools={["add", "edit"]} id={params.id} />
      <Scrollbar>Recipe content</Scrollbar>
    </>
  );
}
