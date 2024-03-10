import Badge from "./Badges/Badge";
import Badges from "./Badges/Badges";
import Button from "./Button/Button";
import CompanyBar from "./CompanyBar/CompanyBar";
import Intro from "./Intro/Intro";
import MeAndPoco from "./MeAndPoco/MeAndPoco";
import Navbar from "./Navbar/Navbar";
import { ReactNode } from "react";

function Wrapper({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <Wrapper title="Navbar">
        <Navbar />
      </Wrapper>
      <Wrapper title="Badge">
        <Badge iconType="linkedin" />
      </Wrapper>
      <Wrapper title="Badges">
        <Badges />
      </Wrapper>
      <Wrapper title="Button Dark">
        <Button text="See my work" mode="dark" />
      </Wrapper>
      <Wrapper title="Button Light">
        <Button text="Button Light" mode="light" />
      </Wrapper>
      <Wrapper title="Company Bar">
        <CompanyBar />
      </Wrapper>
      <Wrapper title="Me and Poco">
        <MeAndPoco />
      </Wrapper>
      <Wrapper title="Intro">
        <Intro />
      </Wrapper>
    </div>
  );
}
