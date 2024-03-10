import Button from "../components/Button/Button";
import CompanyBar from "../components/CompanyBar/CompanyBar";
import MeAndPoco from "../components/MeAndPoco/MeAndPoco";
import { GridArea } from "./types";

export default function Home({ gridArea }: { gridArea: GridArea }) {
  return (
    <div
      style={{
        gridArea: gridArea,
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        alignItems: "center",
        margin: "120px 0",
      }}
    >
      <MeAndPoco />
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Button text="See my work" />
        <Button text="Who am I?" />
      </div>

      <div style={{ width: "100%", height: 1, backgroundColor: "grey" }}></div>
      <CompanyBar />
      <div style={{ width: "100%", height: 1, backgroundColor: "grey" }}></div>
    </div>
  );
}
