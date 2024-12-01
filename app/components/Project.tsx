import styles from '../styles/Project.module.css';

export default function Project() {
  return (
    <section className={styles.project}>
      <p className={styles.tryText}>
        <a
          href="https://writeright-nextjs-project-u5ru.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try it for yourself <span className={styles.tryLink}>HERE</span>!
        </a>
      </p>
      <h2 className={styles.heading}>WriteRight Project</h2>
      <div className={styles.videoWrapper}>
        <video
          src="/project-placeholder.mp4"
          controls
          className={styles.video}
        ></video>
      </div>
      <p className={styles.description}>
        <strong className={styles.highlight}>WriteRight</strong> is an all-in-one website I developed that uses the <strong className={styles.highlight}>ChatGPT API</strong> to function as a grammar checker, rephraser, and text humanizer. It is designed to make writing seamless and polished for users.
      </p>
      <div className={styles.screenshots}>
        <h3 className={styles.screenshotHeading}>Before and After</h3>
        <div className={styles.imageContainer}>
          <img
            src="/before.jpg"
            alt="Before using WriteRight"
            className={styles.image}
          />
          <img
            src="/after.jpg"
            alt="After using WriteRight"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
