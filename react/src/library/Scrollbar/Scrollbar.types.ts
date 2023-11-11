import { ReactNode, RefObject } from "react";

export interface ScrollbarProps {
  children?: ReactNode;
}

export interface ThumbStyleProps {
  wrapperRef?: RefObject<HTMLDivElement>;
  contentRef?: RefObject<HTMLDivElement>;
  trackRef?: RefObject<HTMLDivElement>;
  thumbRef?: RefObject<HTMLDivElement>;
}
