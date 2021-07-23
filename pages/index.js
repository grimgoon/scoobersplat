import styles from "../styles/main.module.scss";
import Footer from "../components/footer";
import AboutCard from "../components/aboutCard";
import Link from "next/link";
import MailchimpForm from "../components/utils/mailchimpForm";

export default function home() {
  return (
    <>
      <div className={styles.home}>
        <section className={styles.header}>
          <div className={styles.__content}>
            <div className={styles.left}>
              <img
                src={"/images/scoobersplatLogo.png"}
                className={styles.logo}
              />
              <h3>You and your friends are Scoobers, deep-sea scavengers.</h3>
              <h3>When your submarine is invaded by rabid Goobers, you must quickly fix your submarine to rescue yourselves from certain massacre!</h3>
              {/* <a className={styles.button} href="">Wishlist on Steam
                <img src="/images/steamLogo.svg" />
              </a> */}
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
                <p>Do whatever it takes to kill the Scoobers and make sure they can't escape.</p>
                <p>Use your heightened senses and speed to your advantage and track any survivors down.</p>
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
                {/* <a href=""><button>Play the free Beta now!</button></a> */}
              </div>
            </div>

          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.__content}>
            <div className={styles.social}>
              <a target="_blank" href="https://discord.gg/JXp8BrfFwS">
                <svg width="64" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.206 1.52C14.071.56 12.71.08 11.271 0l-.227.24c1.286.32 2.422.96 3.481 1.84A11.073 11.073 0 0010.287.72C9.833.64 9.454.64 9 .64c-.454 0-.833 0-1.287.08-1.513.16-2.952.64-4.238 1.36C4.535 1.2 5.67.56 6.956.24L6.73 0c-1.438.08-2.8.56-3.935 1.52C1.507 4.08.826 6.96.75 9.92 1.885 11.2 3.475 12 5.14 12c0 0 .53-.64.908-1.2-.984-.24-1.892-.8-2.498-1.68.53.32 1.06.64 1.59.88.681.32 1.362.48 2.043.64.606.08 1.212.16 1.817.16s1.211-.08 1.816-.16c.682-.16 1.363-.32 2.044-.64.53-.24 1.06-.56 1.59-.88-.606.88-1.514 1.44-2.498 1.68.378.56.908 1.2.908 1.2 1.665 0 3.255-.8 4.39-2.08-.076-2.96-.757-5.84-2.044-8.4zM6.502 8.48c-.757 0-1.438-.72-1.438-1.6 0-.88.681-1.6 1.438-1.6.757 0 1.438.72 1.438 1.6 0 .88-.68 1.6-1.438 1.6zm4.996 0c-.757 0-1.438-.72-1.438-1.6 0-.88.68-1.6 1.438-1.6.757 0 1.438.72 1.438 1.6 0 .88-.681 1.6-1.438 1.6z" fill="#fff"></path></svg>
              </a>
              <a target="_blank" href="http://twitter.com/ScooberSplat">
                <svg width="60" xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }} viewBox="0 0 123 100"><path d="M38.64 100c46.41 0 71.81-38.48 71.81-71.8 0-1.08 0-2.17-.05-3.25 4.92-3.54 9.2-8.02 12.6-13.09-4.53 2.02-9.4 3.35-14.52 3.99 5.22-3.1 9.2-8.07 11.12-13.98-4.87 2.9-10.29 4.97-16.05 6.1C98.93 3.05 92.39 0 85.15 0 71.22 0 59.9 11.32 59.9 25.25c0 1.97.25 3.89.64 5.76C39.57 29.97 20.97 19.88 8.52 4.63c-2.17 3.74-3.4 8.07-3.4 12.7 0 8.76 4.48 16.49 11.22 21.01-4.13-.15-8.02-1.28-11.42-3.15v.34c0 12.2 8.71 22.44 20.23 24.75-2.12.59-4.33.89-6.64.89-1.62 0-3.2-.15-4.73-.44 3.2 10.04 12.55 17.32 23.58 17.52A50.627 50.627 0 0 1 6 89.07c-2.02 0-4.04-.1-6-.34A71.757 71.757 0 0 0 38.64 100"></path></svg>
              </a>
            </div>
            <h1>sign up for newsletter</h1>
            <MailchimpForm url={"https://gmail.us7.list-manage.com/subscribe/post?u=92895a7eb7d1683ec2ad836c0&id=3d8cdfc1f7"} />
            <img src="/images/scooberRun.gif" className={styles.scooberRun} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
