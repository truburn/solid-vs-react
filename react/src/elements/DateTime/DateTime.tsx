import { DateTimeProps, useDateTimeStyles } from "@/elements/DateTime";
import uniqueId from "lodash/uniqueId";
import { DateTime as LuxonDT } from "luxon";
import { useMemo } from "react";

/** Standardized and styled display of date and/or time elements */
export function DateTime(props: DateTimeProps) {
  const {
    date,
    format = "LLL d, yyyy",
    className,
    style,
    id = uniqueId("datetime-"),
  } = props;
  const classes = useDateTimeStyles();

  const dateString = useMemo<string>(() => {
    const luxDate = date ? LuxonDT.fromISO(date) : LuxonDT.now();
    return luxDate.toFormat(format);
  }, [date, format]);

  return (
    <span id={id} css={classes.root} className={className} style={style}>
      {dateString}
    </span>
  );
}
