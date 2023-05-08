import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <p>&copy; Renate {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
