/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FormGroupProps, useFormGroupStyles } from "@/library/FormGroup";
import capitalize from "lodash/capitalize";
import uniqueId from "lodash/uniqueId";
import kebabCase from "lodash/kebabCase";

export function FormGroup(props: FormGroupProps) {
  const { legend, fieldState = "idle", valueDisplay, input, info } = props;
  const classes = useFormGroupStyles(fieldState);

  return (
    <fieldset
      css={classes.root}
      name={kebabCase(legend)}
      id={uniqueId(`form-group-${kebabCase(legend)}-`)}
    >
      <legend css={classes.legend}>{capitalize(legend)}</legend>
      {info && <p css={classes.info}>{info}</p>}
      <div css={classes.values}>
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
      </div>
    </fieldset>
  );
}
