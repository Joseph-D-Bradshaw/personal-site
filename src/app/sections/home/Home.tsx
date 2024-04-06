import Button from "../../components/Button/Button";
import CompanyBar from "../../components/CompanyBar/CompanyBar";
import MeAndPoco from "../../components/MeAndPoco/MeAndPoco";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.grid}>
      <div>
        <MeAndPoco />
      </div>
      <div className={styles.buttons}>
        <Button text="See my work" />
        <Button text="Who am I?" />
      </div>

      <div className={styles.separator}></div>
      <CompanyBar />
      <div className={styles.separator}></div>
    </div>
  );
}
