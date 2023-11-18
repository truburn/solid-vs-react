/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FormGroupProps, useFormGroupStyles } from "@/library/FormGroup";
import capitalize from "lodash/capitalize";
import uniqueId from "lodash/uniqueId";

export function FormGroup(props: FormGroupProps) {
  const {
    fieldName,
    legend,
    fieldState = "idle",
    valueDisplay,
    input,
  } = props;
  const classes = useFormGroupStyles(fieldState);

  return (
    <fieldset css={classes.root} name={fieldName} id={uniqueId(`form-group-${fieldName}-`)}>
      <legend css={classes.legend}>{capitalize(legend ?? fieldName)}</legend>
      {valueDisplay && (
        <div>
          <p css={classes.label}>Current Value</p>
          {valueDisplay}
        </div>
      )}
      <div>
        {valueDisplay && <label css={classes.label}>New Value</label>}
        {input}
      </div>
    </fieldset>
  );
}
