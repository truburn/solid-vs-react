import { useState, useCallback, RefObject, useEffect } from "react";

export function useThumbStyles(contentRef: RefObject<HTMLDivElement>) {
  const [thumbStyles, setThumbStyles] = useState<Record<string, any>>({});

  useEffect(() => {
    setThumbStyles(getThumbLocation(contentRef?.current));
  }, [contentRef]);

  const moveThumb = useCallback(() => {
    setThumbStyles(getThumbLocation(contentRef?.current));
  }, [contentRef]);

  return { thumbStyles, moveThumb };
}

function getThumbLocation(contentEl: HTMLDivElement | null) {
  if (!contentEl) return {};

  const boxHeight = contentEl.getBoundingClientRect()?.height ?? 0;
  const scrollHeight = contentEl.scrollHeight ?? 0;
  const scrollTop = contentEl.scrollTop ?? 0;
  const heightPct = (boxHeight / scrollHeight) * 100;
  const topPct = (scrollTop / scrollHeight) * 100;

  return {
    height: `${heightPct}%`,
    top: `${topPct}%`,
    display: heightPct >= 99 ? "none" : "block",
  };
}
