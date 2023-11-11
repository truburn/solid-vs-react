import { RecipeToolsProps, useRecipeToolsStyles } from "@/library/RecipeTools";
import { Icon } from "@/library/Icon";
import { Link } from "react-router-dom";
import { faPlus, faPencil } from "@fortawesome/pro-solid-svg-icons";

const TOOLS = {
  add: {
    to: "/recipe/new",
    icon: faPlus,
    idParam: false,
    label: "New Recipe",
  },
  edit: {
    to: "/recipe/edit",
    idParam: true,
    icon: faPencil,
    label: "Edit Recipe",
  },
};

export function RecipeTools(props: RecipeToolsProps) {
  const { tools = [], id } = props;
  const classes = useRecipeToolsStyles();

  return (
    <div css={classes.root}>
      {tools.map((key) => {
        const tool = TOOLS[key];
        const url = [tool.to];
        if (tool.idParam && id) url.push(id);

        return (
          <Link key={key} css={classes.link} to={url.join("/")}>
            <span css={classes.linkIcon}>
              <Icon icon={tool.icon} />
            </span>
            <span css={classes.linkLabel}>{tool.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
