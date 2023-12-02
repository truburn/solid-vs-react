import { faRocketLaunch } from "@fortawesome/pro-duotone-svg-icons";
import { faPaw } from "@fortawesome/pro-solid-svg-icons";
import { faPotFood } from "@fortawesome/pro-regular-svg-icons";
import { faGingerbreadMan } from "@fortawesome/pro-thin-svg-icons";

export const colorKey = {
  defaultValue: "standard",
  options: [
    "standard",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ],
  table: {
    defaultValue: { summary: `"standard"` },
  },
};

export const fontKey = {
  control: {
    type: "select",
  },
  options: ["default", "body", "heading"],
  table: {
    defaultValue: { summary: `"default"` },
  },
};

export const icon = {
  control: {
    type: "select",
  },
  options: ["Rocket", "Paw", "Food", "Cookie"],
  mapping: {
    Rocket: faRocketLaunch,
    Paw: faPaw,
    Food: faPotFood,
    Cookie: faGingerbreadMan,
  },
};
