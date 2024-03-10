import Image from "next/image";
import Me from "../../../../public/me.png";
import Poco from "../../../../public/poco.png";
import styles from "./MeAndPoco.module.css";

export default function MeAndPoco() {
  return (
    <div className={styles.meContainer}>
      <div className={styles.imageContainer}>
        <Image className={`${styles.me} ${styles.meImage}`} src={Me} alt="Hello, it's an AI generated me!" />
        <div className={styles.poco}>
          <Image className={` ${styles.pocoImage}`} src={Poco} alt="An AI generated version of my dog Poco" />
          <div className={styles.flex}>
            <div className={styles.pocosName}>Poco</div>
            <div className={styles.pocosDesc}>
              <span className={styles.nowrap}>Professional Attention</span> Seeker
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.myName} ${styles.linearGradient}`}>Joseph Bradshaw</div>
      <div className={styles.myDesc}>Senior Full-Stack Engineer & Computer Scientist</div>
    </div>
  );
}
