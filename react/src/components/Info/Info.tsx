import { InfoProps, useInfoStyles } from "@/components/Info";
import { SectionHeader } from "@/elements/SectionHeader";
import { MealList } from "@/components/MealList";
import uniqueId from "lodash/uniqueId";
import { useAppContext } from "@/layout/App";
import { DateTime } from "@/elements/DateTime";

/** Display a block with the recipe's additional information */
export function Info(props: InfoProps) {
  const { className, style, id = uniqueId("recipe-info-") } = props;
  const { recipe } = useAppContext();
  const { author, created, cuisine } = recipe ?? {};
  const classes = useInfoStyles();

  if (!recipe) return null;

  return (
    <div css={classes.root} className={className} style={style} id={id}>
      <SectionHeader title="About" />
      <p css={classes.info}>
        <span css={classes.label}>Author</span>
        {author}
      </p>
      <p css={classes.info}>
        <span css={classes.label}>Created</span>
        <DateTime date={created} />
      </p>
      {cuisine && (
        <p css={classes.info}>
          <span css={classes.label}>Cuisine</span>
          {cuisine}
        </p>
      )}
      <div css={classes.info}>
        <p css={classes.label}>Meal</p>
        <MealList />
      </div>
    </div>
  );
}
