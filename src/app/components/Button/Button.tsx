import styles from "./Button.module.css";

// TODO: Animate effect like on Figma
export default function Button({ text, mode = "dark" }: { text: string; mode?: "dark" | "light" }) {
  const buttonClass = mode === "dark" ? styles.buttonDark : styles.buttonLight;

  return <a className={`${styles.button} ${buttonClass}`}>{text}</a>;
}
