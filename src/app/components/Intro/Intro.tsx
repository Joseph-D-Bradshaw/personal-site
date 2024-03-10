import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introText}>I'm</div>
      <div className={styles.textContainer}>
        <ul className={styles.list}>
          <li className={`${styles.introText} ${styles.blue}`}>Joseph</li>
          <li className={`${styles.introText} ${styles.darkPink}`}>a Full-Stack Engineer</li>
          <li className={`${styles.introText} ${styles.orange}`}>a Computer Scientist</li>
          <li className={`${styles.introText} ${styles.pink}`}>happy to see you!</li>
        </ul>
      </div>
    </div>
  );
}
