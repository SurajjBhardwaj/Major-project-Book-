import Profile from "@/Component/Profile";
import SearchBar from "@/Component/searchBar";
import Sidebar from "@/Component/Sidebar";
import styles from "../styles/Pages/favourite.module.scss";

import Book_fav from "@/Component/Book_fav";

function favourite() {
  return (
    <>
      <div className={styles.favourite__main}>
        
          <Sidebar />
       

        <div className={styles.favourite}>
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

          {/* Heading */}
          <div className={styles.heading}> My Books </div>

          {/* Book content */}
          <div className={styles.content}>
                
                 <Book_fav />
               
                
          </div>
        </div>
      </div>
    </>
  );
}

export default favourite;
