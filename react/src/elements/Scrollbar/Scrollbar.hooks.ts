import {
  useState,
  useCallback,
  RefObject,
  useEffect,
  CSSProperties,
  useMemo,
} from "react";

export function useThumbPosition(contentRef: RefObject<HTMLDivElement>) {
  const [thumbStyles, setThumbStyles] = useState<CSSProperties>({});

  useEffect(() => {
    setThumbStyles(getThumbLocation(contentRef?.current));
  }, [contentRef]);

  const moveThumb = useCallback(() => {
    setThumbStyles(getThumbLocation(contentRef?.current));
  }, [contentRef]);

  const disableTrack = useMemo<boolean>(() => {
    return thumbStyles.display === "none";
  }, [thumbStyles]);

  return { thumbStyles, moveThumb, disableTrack };
}

export function useCustomStyle(style?: CSSProperties) {
  const finalStyle = useMemo<CSSProperties>(() => {
    if (style) {
      const tmpStyle = { ...style };
      if (tmpStyle.width || tmpStyle.height) {
        tmpStyle.flex = "unset";
      }
      return tmpStyle;
    }

    return {};
  }, [style]);

  return finalStyle;
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
