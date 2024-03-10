import { GridArea } from "./types";

export default function CV({ gridArea }: { gridArea: GridArea }) {
  return <h1 style={{ gridArea: gridArea }}>CV</h1>;
}
