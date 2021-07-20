import styles from "../styles/main.module.scss";

export default function signup() {
  return (
    <footer className={styles.footer}>
      <img src={"/images/knackelibangLogo.svg"} className={styles.logo} />
      <p>All Rights Reserved ©</p>
      <p className={styles.contact}>contact@knackelibang.com</p>
    </footer>
  );
}
