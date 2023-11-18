/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FormGroupProps, useFormGroupStyles } from "@/library/FormGroup";
import { useState } from "react";
import capitalize from "lodash/capitalize";

export function FormGroup(props: FormGroupProps) {
  const {
    fieldName,
    initialValue,
    value,
    onChange,
    InputComponent,
    DisplayComponent,
  } = props;
  const [status, setStatus] = useState("idle");
  const classes = useFormGroupStyles(status);

  const updateField = (evt: any) => {
    const newValue = evt.target?.value;
    const tmpStatus = newValue !== initialValue ? "changed" : "idle";
    setStatus(tmpStatus);
    onChange && onChange(fieldName, newValue);
  };

  return (
    <fieldset css={classes.root} name={fieldName}>
      <legend css={classes.legend}>{capitalize(fieldName)}</legend>
      <div>
        <p css={classes.label}>Current Value</p>
        {DisplayComponent ? (
          <DisplayComponent value={value} />
        ) : (
          <div>{initialValue}</div>
        )}
      </div>
      <div>
        <label css={classes.label}>New Value</label>
        {InputComponent ? (
          <InputComponent onChange={updateField} value={value} />
        ) : (
          <input onChange={updateField} value={value} css={classes.input} />
        )}
      </div>
    </fieldset>
  );
}
