import { useEffect } from "react";
import { useAppContext } from "@/layout/AppProvider";

export function useClearSides() {
  const { setShowList, setSidePanelContent } = useAppContext();

  useEffect(() => {
    setShowList(false);
    setSidePanelContent(null);
  }, [setShowList, setSidePanelContent]);
}
