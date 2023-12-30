import { ToolButtonsProps } from "@/components/ToolButtons";
import { ReactNode } from "react";

export interface ContentProps {
  title?: string;
  children?: ReactNode;
  tools?: ToolButtonsProps["tools"];
}
