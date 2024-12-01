import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Shourya Walia. All rights reserved.</p>
      <div>
        <a href="mailto:shouryawalia123@gmail.com">Email</a>
      </div>
    </footer>
  );
}
