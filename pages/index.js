import styles from "../styles/main.module.scss";
import Footer from "../components/footer";
import AboutCard from "../components/aboutCard";
import Link from "next/link";
import MailchimpForm from "react-mailchimp-subscribe";

export default function home() {
  return (
    <>
      <div className={styles.home}>
        <section className={styles.header}>
          <div className={styles.content}>
            <div className={styles.left}>
              <img
                src={"/images/scoobersplatLogo.png"}
                className={styles.logo}
              />
              <h3>You and your friends are Scoobers, deep-sea scavengers.</h3>
              <h3>When your submarine is invaded by rabid Goobers, you must quickly fix your submarine to rescue yourselves from certain massacre!</h3>

            </div>
            <div className={styles.hero}>
              <img src="/images/hero.png" />
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.__content}>
            <div className={styles.card}>
              <div className={styles.text}>
                <h3>Scoobers</h3>
                <p>Work together with your teammates to repair your submarine by using your wit and vision advantage to escape from the Goobers.</p>
              </div>
              <img src="/images/about/scoobers.gif" />
            </div>


            <div className={styles.card}>
              <img src="/images/about/goobers.gif" />
              <div className={styles.text}>
                <h3>Goobers</h3>
                <p>Do whatever it takes to kill the Scoobers to make they sure they can't escape.</p>
                <p> Use your heightened senses and speed to your advantage and track any survivors down.</p>
              </div>

            </div>

            <div className={styles.card}>
              <div className={styles.text}>
                <h3>Powerups</h3>
                <p>Each round you get new powerups to better equip you to survive and fight off the Goobers.

                </p>
                <p>However, you're not the only one that gets stronger.</p>
              </div>
              <img src="/images/about/powerups.gif" />
            </div>

            <div className={styles.card}>
              <img src="/images/about/share.png" />
              <div className={styles.text}>

                <h3>A single click away</h3>
                <p>Share your game anywhere and with anyone.</p>
                <p>Scoober Splat runs directly in the browser making it just one click away to invite your friends.</p>
                <a href=""><button>Play now</button></a>
              </div>
            </div>

          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.__content}>
            <h1>sign up for newsletter</h1>
            <MailchimpForm />
            <img src="/images/scooberRun.gif" className={styles.scooberRun} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
