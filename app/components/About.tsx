import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <p>
        I am a passionate computer science enthusiast with experience in web
        development, artificial intelligence, and algorithm design.
      </p>
      <p>
        Contact me via: <a href="mailto:shouryawalia123@gmail.com">Email</a>
      </p>
    </section>
  );
}
