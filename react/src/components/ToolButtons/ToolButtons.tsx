import {
  ToolButtonsProps,
  useToolButtonsStyles,
} from "@/components/ToolButtons";
import uniqueId from "lodash/uniqueId";
import { useAppContext } from "@/layout/App";
import { faPlus, faXmark } from "@fortawesome/pro-regular-svg-icons";
import {
  Button,
  ButtonProps,
  ButtonStyle,
  ButtonVariant,
} from "@/elements/Button";
import { useNavigate } from "react-router-dom";
import { faPencil } from "@fortawesome/pro-light-svg-icons";

/** Buttons for actions to perform on a recipe */
export function ToolButtons(_props: ToolButtonsProps) {
  const { id = uniqueId("tool-buttons-"), tools, ...props } = _props;
  const classes = useToolButtonsStyles();
  const { recipe } = useAppContext();
  const navigate = useNavigate();

  const buttonProps: Partial<ButtonProps> = {
    iconButton: true,
    buttonStyle: ButtonStyle.OUTLINE,
    variant: ButtonVariant.ROUND,
    colorKey: "secondary",
  };

  if (!tools) return null;

  return (
    <div id={id} css={classes.root} {...props}>
      {tools.edit && recipe && (
        <Button
          {...buttonProps}
          label="Edit Recipe"
          icon={faPencil}
          css={classes.button}
          onClick={() => navigate(`/recipe/edit/${recipe.recipeID}`)}
        />
      )}
      {tools.add && (
        <Button
          {...buttonProps}
          label="New Recipe"
          icon={faPlus}
          css={classes.button}
          onClick={() => navigate("/recipe/new")}
        />
      )}
      {tools.cancel && (
        <Button
          {...buttonProps}
          label="Cancel"
          icon={faXmark}
          css={classes.button}
          onClick={() => navigate(-1)}
        />
      )}
    </div>
  );
}
