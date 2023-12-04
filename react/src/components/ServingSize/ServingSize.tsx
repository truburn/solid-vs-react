import {
  ServingSizeProps,
  useServingSizeStyles,
} from "@/components/ServingSize";

/** Display information about the servings and serving size */
export function ServingSize(props: ServingSizeProps) {
  const classes = useServingSizeStyles();

  return <div css={classes.root}>Serving Size</div>;
}
