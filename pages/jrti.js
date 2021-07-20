import styles from "../styles/main.module.scss";
import MailchimpForm from "../components/utils/mailchimpForm";
import Footer from "../components/footer";

export default function signup() {
  return (
    <>
      <div className={styles.signup}>
        <section className={styles.header}>
          <div className={styles.__content}>
            <img src={"/images/signup/JRTILogo.png"} className={styles.logo} />
          </div>
        </section>

        <section className={styles.email}>
          <div className={styles.__content}>
            <h2 className={styles.header}>SIGN UP FOR EARLY BETA ACCESS</h2>
            <p>We promise, no emails until we have a beta for you to play</p>
            <MailchimpForm />
          </div>
        </section>

        <section className={styles.description}>
          <div className={styles.__content}>
            <div>
              <p>
                A surreal co-op first person shooter game where the only thing
                that matters is following the next set of instructions. Enemies
                will flood the scene, your weapons will break, more instructions
                will come, and then repeat.
              </p>
              <p>Aspire to not die.</p>
            </div>
            <a
              target="_BLANK"
              href={
                "https://store.steampowered.com/app/1461370/Just_Read_The_Instructions"
              }
              className={styles.steamButton}
            >
              <img src={"/images/steamLogo.png"} />
              <span>WISHLIST ON STEAM</span>
            </a>
          </div>
        </section>

        <section className={styles.valueprop}>
          <div className={styles.__content}>
            <div className={styles.gifs}>
              <img src={"/images/signup/gifs/Screenshot_01.png"} />
              <img src={"/images/signup/gifs/Screenshot_02.png"} />
              <img src={"/images/signup/gifs/Screenshot_03.png"} />
              <img src={"/images/signup/gifs/Screenshot_04.png"} />
            </div>
            <img
              src={"/images/signup/crawler.png"}
              className={styles.crawler}
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
