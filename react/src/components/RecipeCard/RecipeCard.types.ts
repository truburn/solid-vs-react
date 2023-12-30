export type RecipeCardProps = MCComponent &
  Pick<MCStyleKeys, "colorKey"> & {
    /** The recipe to display in the card */
    recipe?: Recipe;
  };
