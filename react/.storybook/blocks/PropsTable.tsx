import { ArgTypes, useOf } from "@storybook/blocks";
import React, { useMemo } from "react";
import { ImportStatement } from "./ImportStatement";

/** Table of props */
export function PropsTable() {
  const resolvedOf = useOf("meta");

  const title = useMemo<string>(() => {
    if (resolvedOf.type === "meta") {
      const { title } = resolvedOf.preparedMeta;
      const [_, component] = title.split("/");

      return component;
    }
    
    return "";
  }, [resolvedOf]);

  return (
    <>
      <h2>{`${title}Props`}</h2>
      <ImportStatement suffix="Props" />
      <ArgTypes />
    </>
  )
}
