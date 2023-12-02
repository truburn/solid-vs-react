import {
  ScrollbarProps,
  useCustomStyle,
  useScrollbarStyles,
  useThumbPosition,
} from "@/elements/Scrollbar";
import uniqueId from "lodash/uniqueId";
import { useEffect, useRef } from "react";

/** Customized scrollbar container */
export function Scrollbar(_props: ScrollbarProps) {
  const { className, children, style, showScrollbar, id, ...props } = _props;
  const classes = useScrollbarStyles(props);
  const elID = id ?? uniqueId("scrollbar-");
  const contentRef = useRef<HTMLDivElement>(null);
  const { thumbStyles, moveThumb, disableTrack } = useThumbPosition(contentRef);
  const customStyle = useCustomStyle(style);

  useEffect(() => {
    contentRef?.current?.addEventListener("resize", moveThumb);

    return () => {
      contentRef?.current?.removeEventListener("resize", moveThumb);
    };
  }, []);

  useEffect(() => {
    moveThumb();
  }, [children]);

  return (
    <div css={classes.root} id={elID} className={className} style={customStyle}>
      <div css={classes.contentWrapper}>
        <div
          css={classes.content}
          ref={contentRef}
          onScroll={moveThumb}
          style={{
            ...((showScrollbar || disableTrack) && { marginRight: 0 }),
          }}
        >
          {children}
        </div>
      </div>
      <div
        css={classes.track}
        style={{
          display: showScrollbar ? "block" : thumbStyles.display,
          opacity: disableTrack ? 0.5 : 1,
        }}
      >
        <div css={classes.thumb} style={thumbStyles} />
      </div>
    </div>
  );
}
