import { CSSProperties } from "react";
import Badge from "./Badge";
import styles from "./Badges.module.css";

export default function Badges({ style }: { style?: CSSProperties }) {
  return (
    <div style={style} className={`${styles.badgesContainer}`}>
      <Badge iconType="linkedin" />
      <Badge iconType="gitlab" />
      <Badge iconType="github" />
      <Badge iconType="email" />
    </div>
  );
}
