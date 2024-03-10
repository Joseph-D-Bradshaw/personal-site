import { GridArea } from "./types";

export default function Contact({ gridArea }: { gridArea: GridArea }) {
  return <h1 style={{ gridArea: gridArea }}>Contact</h1>;
}
