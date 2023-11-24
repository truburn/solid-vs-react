import {
  ServingsInputProps,
  useServingsInputStyles,
} from "@/form/ServingsInput";
import { NumberInput } from "@/form/NumberInput";

export function ServingsInput(props: ServingsInputProps) {
  const { updateField, servingsValue } = props;
  const readonly = !updateField;
  const classes = useServingsInputStyles(readonly);

  return (
    <div css={classes.root}>
      <div>
        <label htmlFor="servings-input">Number of Servings</label>
        <NumberInput id="servings-input" name="servings" value={servingsValue} />
      </div>
    </div>
  );
}
