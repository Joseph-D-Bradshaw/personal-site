import Image from "next/image";
import kron from "../../../../public/kron.svg";
import statkraft from "../../../../public/statkraft.png";
import xerox from "../../../../public/xerox.svg";
import styles from "./CompanyBar.module.css";

function Separator() {
  return <div className={styles.separator}></div>;
}

function Company({ className, src, alt }: { className: string; src: any; alt: string }) {
  return <Image className={`${className} ${styles.image}`} src={src} alt={alt} />;
}

export default function CompanyBar() {
  return (
    <div className={styles.companyContainer}>
      <Company className={styles.kron} src={kron} alt="Kron company logo" />
      <Separator />
      <Company className={styles.statkraft} src={statkraft} alt="Statkraft company logo" />
      <Separator />
      <Company className={styles.xerox} src={xerox} alt="Xerox company logo" />
    </div>
  );
}
