import { RecipeCard } from "@/components/RecipeCard";
import { RecipeListProps, useRecipeListStyles } from "@/components/RecipeList";
import { Scrollbar } from "@/elements/Scrollbar";
import { useAppContext } from "@/layout/App";
import uniqueId from "lodash/uniqueId";

/** Display a list of recipes */
export function RecipeList(_props: RecipeListProps) {
  const { className, style, id = uniqueId("recipe-list-"), ...props } = _props;
  const { list = [] } = useAppContext();
  const classes = useRecipeListStyles(props);

  return (
    <div css={classes.root} className={className} style={style} id={id}>
      <Scrollbar showScrollbar>
        <ul css={classes.list}>
          {list.map((recipe, idx) => {
            const recipeKey = [recipe.recipeID, idx].join("-");
            return (
              <li key={recipeKey}>
                <RecipeCard id={recipeKey} recipe={recipe} />
              </li>
            );
          })}
        </ul>
      </Scrollbar>
    </div>
  );
}
