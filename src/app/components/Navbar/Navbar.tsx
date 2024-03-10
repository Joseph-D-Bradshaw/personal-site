import styles from "./Navbar.module.css";

function Separator() {
  return <div className={styles.separator}></div>;
}

function Button({ text, active = false }: { text: string; active?: boolean }) {
  const activeStyle = active ? styles.navTextSelected : "";

  return <a className={`${activeStyle} ${styles.link} ${styles.navText} ${styles.navButton}`}>{text}</a>;
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Button text="Home" />
      <Separator />
      <Button text="About" />
      <Separator />
      <Button text="Projects/Skills" active />
      <Separator />
      <Button text="CV" />
      <Separator />
      <Button text="Contact" />
    </nav>
  );
}
