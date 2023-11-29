import { useEffect, useMemo } from "react";
import { ButtonProps, ButtonVariant } from "./Button.types";
import { ThemeColorKey } from "@/theme";
import kebabCase from "lodash/kebabCase";
import startCase from "lodash/startCase";
import Button from "./Button";
import { css } from "@emotion/react";

const colorKeys: ThemeColorKey[] = [
  "standard",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

interface ButtonGroup {
  id: string;
  name: string;
  variant?: ButtonVariant;
  buttonProps: Partial<ButtonProps>;
}

export function ButtonStory(props: ButtonProps) {
  const { label, icon, id, tooltip, variant  } = props;

  const rows = useMemo<ButtonGroup[]>(() => {
    const list: ButtonGroup[] = [
      {
        id: "default-state",
        name: "Default State",
        variant,
        buttonProps: {
          id,
          tooltip,
        }
      },
      {
        id: "disabled-state",
        name: "Disabled State",
        variant,
        buttonProps: {
          id,
          tooltip,
          disabled: true,
        }
      }
    ];

    return list;
  }, [variant]);

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div css={css({ overflow: "auto", height: "100%" })}>
      {rows.map((r) => (
        <div key={r.id} css={css({ maxWidth: "100%"})}>
          <h1 css={css({ borderBottom: "solid 1px"})}>
            {r.name}
          </h1>
          <div css={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          })}>
            {colorKeys.map((colorKey) => (
              <div key={colorKey} css={css({ padding: "0.5rem 1rem"})}>
                <Button
                  {...r.buttonProps}
                  colorKey={colorKey}
                  variant={r.variant}
                  label={`${label} - ${startCase(colorKey)}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
