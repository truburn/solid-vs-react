export interface SectionHeaderProps extends MCElement {
  /**
   * Text string to display in the header. If `children` is defined, they
   * will override the title.
   */
  title: string;
  /** The heading level to display */
  depth?: number;
}
