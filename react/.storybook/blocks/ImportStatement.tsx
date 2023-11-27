import { useOf } from "@storybook/blocks";
import React, { useMemo } from "react";
import kebabCase from "lodash/kebabCase";
import { Source } from "@storybook/blocks";

/** Block that displays the import statement for the component */
export function ImportStatement({
  suffix = "",
  prefix = "",
}: {
  suffix?: string;
  prefix?: string;
}) {
  const resolvedOf = useOf("story");

  const statement = useMemo<string | null>(() => {
    if (resolvedOf.type === "story") {
      const { title } = resolvedOf.story;
      const [category, component] = title.split("/");
      const path = kebabCase(category).replace(/-/g, "/");
      return `import { ${prefix}${component}${suffix} } from "@/${path}/${component}";`;
    }

    return null;
  }, [resolvedOf]);

  return statement ? <Source code={statement} /> : null;
}
