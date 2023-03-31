import styles from '../styles/pages/footer.module.scss'

import Profile from "@/Component/Profile";
import SearchBar from "@/Component/searchBar";
import Sidebar from "@/Component/Sidebar";

import Image from 'next/image';
import Link from 'next/link';




function footer() {
  return (
    <>
      <div className={styles.footer__main}>
        <div className={styles.side}>
          <Sidebar />
        </div>
        <div className={styles.footer}>
          {/* Background 1 */}
          <div className={styles.background1}></div>

          {/* Background 2 */}
          <div className={styles.background2}></div>

          {/* search bar */}
          <div className={styles.search}>
            <SearchBar />
          </div>

          {/* profile bar */}
          <div className={styles.profilebar}>
            <Profile />
          </div>

          {/* logo */}
          <div className={styles.logo}>
            <Image  className={styles.img} src="/logo-white-1.png"  alt="logo" width={150} height={150} />
          </div>

          {/* Heading */}
          <div className={styles.heading}> Town of Book </div>

          {/* Book content */}
          <div className={styles.content}>
            <div className={styles.part1} >
                
                <Link className={styles.link} href="#">Contact Us</Link>
                <Link className={styles.link} href="#">Help</Link>
                <Link className={styles.link} href="#">Privacy Police</Link>
                <Link className={styles.link} href="#">Socials</Link>
            </div>
            <div className={styles.part2}>
                 Built with ❤️ by <Link className={styles.link2} href="#">Jyoti KM </Link> and 
                 <Link className={styles.link2} href="#"> SURAJ BHARDWAJ</Link>. 
                 This is our project website , build using next.js and Mongodb 
                 It is full stack website . It is responsible website.
                 Copyright ©2023 website is not live for services.
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
