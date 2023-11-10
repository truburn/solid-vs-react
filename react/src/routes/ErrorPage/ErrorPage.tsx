import { useClearSides } from "@/utils/common.hooks";
import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";

export function ErrorPage() {
  useClearSides();

  return (
    <>
      <PageHeader title="Error Page" />
      <Scrollbar>Error content</Scrollbar>
    </>
  );
}
