import { Mixins } from "@/utils";
import { css } from "@emotion/react";

export function useDateTimeStyles() {
  const root = css({
    ...Mixins.spacing("margin", { horizontal: "1ch" }),
  });

  return { root };
}
