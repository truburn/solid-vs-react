export interface MealListProps
  extends MCComponent,
    Pick<MCStyleKeys, "colorKey"> {
  align?: "left" | "right";
  meals?: Recipe["meal"];
}
