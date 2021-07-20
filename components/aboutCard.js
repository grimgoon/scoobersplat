import styles from "../styles/main.module.scss";

export default function aboutCard(props) {
  const { imgSrc, name, title, description, email } = props;

  return (
    <div className={styles.card}>
      <img src={imgSrc} />
      <div className={styles.description}>
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{description}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
}
