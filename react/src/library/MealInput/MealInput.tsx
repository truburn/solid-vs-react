import { Meal, MealInputProps, useMealInputStyles } from "@/library/MealInput";
import capitalize from "lodash/capitalize";

const MEAL_LIST: Meal[] = [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "brunch",
  "appetizer",
  "dessert",
];

export function MealInput(props: MealInputProps) {
  const { updateField, value = [] } = props;
  const readonly = !updateField;
  const classes = useMealInputStyles(readonly);

  const toggleCheckbox = (evt: any) => {
    const {
      target: { checked, value: newValue },
    } = evt;
    const mealValue = newValue as Meal;
    let tmpList: Meal[] = [...value];

    if (checked && !tmpList.includes(mealValue)) {
      tmpList.push(mealValue);
    } else if (!checked && tmpList.includes(mealValue)) {
      tmpList = tmpList.filter((val) => val !== mealValue);
    }

    updateField && updateField({ meal: tmpList });
  };

  return (
    <div css={classes.root}>
      <ul css={classes.list}>
        {value.map((meal) => (
          <li key={meal}>{capitalize(meal)}</li>
        ))}
      </ul>
      <div css={classes.inputs}>
        {MEAL_LIST.map((meal) => (
          <label key={meal} css={classes.checkbox}>
            <input
              type="checkbox"
              value={meal}
              disabled={readonly}
              checked={value?.includes(meal)}
              onChange={toggleCheckbox}
            />
            {capitalize(meal)}
          </label>
        ))}
      </div>
    </div>
  );
}
