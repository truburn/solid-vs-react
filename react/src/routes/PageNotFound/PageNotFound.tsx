import { PageHeader } from "@/library/PageHeader";
import { useClearSides } from "@/utils/common.hooks";

export function PageNotFound() {
  useClearSides();

  return (
    <>
      <PageHeader title="404 - Page Not Found" />
      <div>Some fancy cool and cute content about the page missing.</div>
    </>
  );
}
