import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>Shourya Walia</h1>
        <p className={styles.tagline}>
          Aspiring Computer Scientist 💻
        </p>
      </div>
    </section>
  );
}
