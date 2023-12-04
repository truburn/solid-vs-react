import { DateTimeProps, useDateTimeStyles } from "@/elements/DateTime";

/** Standardized and styled display of date and/or time elements */
export function DateTime(props: DateTimeProps) {
  const classes = useDateTimeStyles();

  return <div css={classes.root}>Date Time</div>;
}
