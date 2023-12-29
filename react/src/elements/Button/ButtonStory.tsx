import {
  ButtonProps,
  ButtonStyle,
  ButtonVariant,
  Button,
} from "@/elements/Button";
import { ThemeColorKey } from "@/theme";
import kebabCase from "lodash/kebabCase";
import startCase from "lodash/startCase";
import { css } from "@emotion/react";
import { Mixins } from "@/utils";

const colorKeys: ThemeColorKey[] = [
  "standard",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

const styleList = [ButtonStyle.OUTLINE, ButtonStyle.FILLED];

const buttonVariations: Partial<ButtonProps>[] = [
  {
    id: "label-only",
    label: "Label Only",
  },
  {
    id: "icon-left",
    label: "Icon on the left",
  },
  {
    id: "icon-right",
    label: "Icon on the right",
    iconPosition: "right",
  },
  {
    id: "icon-only",
    label: "Icon Only",
    iconButton: true,
  },
];

export function ButtonStory(_props: ButtonProps) {
  const {
    label,
    icon,
    id,
    tooltip,
    variant = ButtonVariant.STANDARD,
    ...props
  } = _props;

  return (
    <div css={css({ overflow: "auto", flex: 1 })}>
      {styleList
        .filter((buttonStyle) => {
          if (variant === ButtonVariant.TEXT) {
            return buttonStyle === "outline";
          }
          return true;
        })
        .map((buttonStyle) => (
          <div
            key={buttonStyle}
            css={css({
              borderStyle: "solid",
              ...Mixins.borderWidths({ vertical: 1 }),
              ...Mixins.spacing("padding", { bottom: "1rem" }),
            })}
          >
            <h1>{startCase(buttonStyle)}</h1>
            {buttonVariations.map(
              ({ id: varID, label: varLabel, ...btnProps }) => (
                <div
                  key={varID}
                  css={css({
                    ...Mixins.spacing("margin", { horizontal: "1rem" }),
                    ...Mixins.spacing("padding", { bottom: "1rem" }),
                  })}
                >
                  <h2>{varLabel}</h2>
                  <div
                    css={css({
                      display: "flex",
                      flexWrap: "wrap",
                      ...Mixins.spacing("margin", { horizontal: "1rem " }),
                    })}
                  >
                    {colorKeys.map((colorKey) => (
                      <Button
                        {...props}
                        {...btnProps}
                        key={colorKey}
                        label={`${label} - ${startCase(colorKey)}`}
                        id={`${id}-${kebabCase(colorKey)}`}
                        icon={varID?.includes("icon") ? icon : undefined}
                        tooltip={
                          tooltip
                            ? `${tooltip}-${startCase(colorKey)}`
                            : undefined
                        }
                        variant={variant}
                        colorKey={colorKey}
                        css={css({
                          ...Mixins.spacing("margin", {
                            horizontal: "1rem",
                            vertical: "0.5rem",
                          }),
                        })}
                        buttonStyle={buttonStyle}
                      />
                    ))}
                  </div>
                  <div
                    css={css({
                      display: "flex",
                      flexWrap: "wrap",
                      ...Mixins.spacing("margin", { horizontal: "1rem" }),
                    })}
                  >
                    {colorKeys.map((colorKey) => (
                      <Button
                        {...props}
                        {...btnProps}
                        key={colorKey}
                        label={`${label} - ${startCase(colorKey)}`}
                        id={`${id}-${kebabCase(colorKey)}`}
                        icon={varID?.includes("icon") ? icon : undefined}
                        tooltip={
                          tooltip
                            ? `${tooltip}-${startCase(colorKey)}`
                            : undefined
                        }
                        variant={variant}
                        colorKey={colorKey}
                        css={css({
                          ...Mixins.spacing("margin", {
                            horizontal: "1rem",
                            vertical: "0.5rem",
                          }),
                        })}
                        buttonStyle={buttonStyle}
                        disabled
                      />
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        ))}
    </div>
  );
}
