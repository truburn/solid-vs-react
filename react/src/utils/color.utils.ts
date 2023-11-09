import chroma from "chroma-js";

export function colorOpacity(color: string, opacity: number): string {
  const chromaColor = chroma(color).alpha(opacity).rgba();
  return `rgba(${chromaColor.join(",")})`;
}
