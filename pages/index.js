import styles from "../styles/main.module.scss";
import Footer from "../components/footer";
import AboutCard from "../components/aboutCard";
import Link from "next/link";

export default function home() {
  return (
    <>
      <div className={styles.home}>
        <section className={styles.header}>
          <div className={styles.content}>
            <div className={styles.left}>
              <img
                src={"/images/knackelibangLogo.svg"}
                className={styles.logo}
              />
              <p>Games with a bang</p>
              <img
                src={"/images/signup/crawler.png"}
                className={styles.crawler}
              />
            </div>
            <video src="/headerMovie2.mp4" autoPlay loop />
          </div>
        </section>

        <section className={styles.games}>
          <div className={styles.__content}>
            <h1>Just Read the Instructions</h1>
            <p>
              A surreal co-op first person shooter game where the only thing
              that matters is following the next set of instructions.
            </p>
            <p>
              Enemies will flood the scene, your weapons will break, more
              instructions will come, and then repeat.
            </p>
            <Link href="/jrti">
              <button>Read more</button>
            </Link>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.__content}>
            <h1>About</h1>
            <p>
              At Box Dragon, we combine our creativity to realize immersive
              games.
            </p>
            <p>
              We’re looking for likeminded artisans to add their mark to our
              studio.
            </p>
            <div className={styles.cards}>
              <AboutCard
                imgSrc={"/images/aboutTobias.jpg"}
                name={"Tobias Johansson"}
                title={"CEO"}
                description={
                  "Former meep morp at peep porp. Loves to deep dorp."
                }
                email={"tobias@knackelibang.com"}
              />
              <AboutCard
                imgSrc={"/images/aboutTobias.jpg"}
                name={"Tobias Johansson"}
                title={"CEO"}
                description={
                  "Former meep morp at peep porp. Loves to deep dorp."
                }
                email={"tobias@knackelibang.com"}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
