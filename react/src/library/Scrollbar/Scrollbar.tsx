import { useRef, useEffect } from "react";
import {
  useScrollbarStyles,
  ScrollbarProps,
  useThumbStyles,
} from "@/library/Scrollbar";

export function Scrollbar(props: ScrollbarProps) {
  const classes = useScrollbarStyles();
  const contentRef = useRef<HTMLDivElement>(null);
  const { thumbStyles, moveThumb } = useThumbStyles(contentRef);

  useEffect(() => {
    window.addEventListener("resize", moveThumb);

    return () => {
      window.removeEventListener("resize", moveThumb);
    };
  }, []);

  useEffect(() => {
    moveThumb();
  }, [props.children]);

  return (
    <div css={classes.root}>
      <div css={classes.contentWrapper}>
        <div
          css={classes.content}
          ref={contentRef}
          onScroll={moveThumb}
          style={{
            ...(thumbStyles.display === "none" && {
              marginRight: 0,
            }),
          }}
        >
          {props.children}
        </div>
      </div>
      <div css={classes.track} style={{ display: thumbStyles.display }}>
        <div css={classes.thumb} style={thumbStyles} />
      </div>
    </div>
  );
}
