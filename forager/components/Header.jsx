import Link from 'next/link';
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function HeaderBar() {
  return (
    <div className={styles.headerBar}>
        <div className={styles.headerWelcome}>
            <h1>Welcome, Chantelle</h1>
        </div>
        <div className={styles.headerProfilePic}>
          <img src="images/NameIcon.png" alt="Profile Picture" className={styles.profilePic} />
        </div>
    </div>
  );
}
