import { GridArea } from "./types";

export default function About({ gridArea }: { gridArea: GridArea }) {
  return <h1 style={{ gridArea: gridArea }}>About</h1>;
}
