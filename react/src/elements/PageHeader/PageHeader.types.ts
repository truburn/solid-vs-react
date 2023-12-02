import { MCElement } from "@/vite-env";

export interface PageHeaderProps extends MCElement {
  /**
   * Text string to display in the header. If `children` is defined, they
   * will override the title.
   */
  title: string;
}
