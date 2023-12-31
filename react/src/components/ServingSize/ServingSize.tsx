import {
  ServingSizeProps,
  useServingSizeStyles,
} from "@/components/ServingSize";
import { NumberInput } from "@/form/elements/NumberInput";
import { useAppContext } from "@/layout/App";
import uniqueId from "lodash/uniqueId";
import { useMemo } from "react";

/** Display information about the servings and serving size */
export function ServingSize(_props: ServingSizeProps) {
  const { id, ...props } = _props;
  const classes = useServingSizeStyles();
  const { recipe } = useAppContext();
  const { servings } = recipe ?? {};

  const elID = useMemo<string>(() => {
    if (id) return id;
    if (recipe) return uniqueId(`${recipe.recipeID}-servings-`);
    return uniqueId("servings-");
  }, [id, recipe]);

  if (!servings) return null;

  return (
    <div id={elID} css={classes.root} {...props}>
      {servings.total && (
        <div>
          <NumberInput defaultValue={servings.total} />
        </div>
      )}
      {servings.size && (
        <p>{`Serving size: ${servings.size.qty} ${servings.size.unit}`}</p>
      )}
    </div>
  );
}
