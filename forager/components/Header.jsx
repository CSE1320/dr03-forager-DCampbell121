'use client'

import styles from '../styles/NavBar.module.css';
import { usePathname } from 'next/navigation';

export default function HeaderBar() {
  const currentPage = usePathname();

  let profilePic = null //only want this on home screen, set it to null and 'activate' it if were on home screen

  const getHeaderMessage = () => {
    if (currentPage === '/dashboard') {
      profilePic = <img src="images/NameIcon.png" alt="Profile Picture" className={styles.profilePic} />;
      return 'Welcome, Chantelle';
    } else if (currentPage === '/mushroom') {
      return 'Match Results';
    } else if (currentPage === '/comparison') {
      return 'Compare';
    }
    return `Error, I think I am on ${currentPage}`; //debug to tell me what page I am on
  };

  return (
    <div className={styles.headerBar}>
        <div className={styles.headerWelcome}>
          <h1>{getHeaderMessage()}</h1>
        </div>
        <div className={styles.headerProfilePic}>
          {profilePic}
        </div>
    </div>
  );
}
