import styles from "../styles/main.module.scss";

export default function signup() {
  return (
    <footer className={styles.footer}>
      <img src={"/images/footerDivider.png"} className={styles.divider} />
      <img src={"/images/noBloatLogo.png"} className={styles.logo} />
      <a target="_blank" href="http://twitter.com/ScooberSplat">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }} height="20" viewBox="0 0 123 100"><path d="M38.64 100c46.41 0 71.81-38.48 71.81-71.8 0-1.08 0-2.17-.05-3.25 4.92-3.54 9.2-8.02 12.6-13.09-4.53 2.02-9.4 3.35-14.52 3.99 5.22-3.1 9.2-8.07 11.12-13.98-4.87 2.9-10.29 4.97-16.05 6.1C98.93 3.05 92.39 0 85.15 0 71.22 0 59.9 11.32 59.9 25.25c0 1.97.25 3.89.64 5.76C39.57 29.97 20.97 19.88 8.52 4.63c-2.17 3.74-3.4 8.07-3.4 12.7 0 8.76 4.48 16.49 11.22 21.01-4.13-.15-8.02-1.28-11.42-3.15v.34c0 12.2 8.71 22.44 20.23 24.75-2.12.59-4.33.89-6.64.89-1.62 0-3.2-.15-4.73-.44 3.2 10.04 12.55 17.32 23.58 17.52A50.627 50.627 0 0 1 6 89.07c-2.02 0-4.04-.1-6-.34A71.757 71.757 0 0 0 38.64 100"></path></svg>
      </a>
      <p>All Rights Reserved, No Bloat Studios ©</p>
      {/* <p className={styles.contact}>contact@knackelibang.com</p> */}
    </footer>
  );
}
