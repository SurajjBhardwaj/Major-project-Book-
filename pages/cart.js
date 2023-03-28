import Profile from "@/Component/Profile";
import SearchBar from "@/Component/searchBar";
import Sidebar from "@/Component/Sidebar";
import styles from "../styles/Pages/cart.module.scss";

import Book_cart from '@/Component/book_cart'


function cart() {
  return (
    <>
    <div className={styles.cart__main}>
      <div className={styles.side}>
        <Sidebar />
      </div>

      <div className={styles.cart}>
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
        <div className={styles.heading}>My Shopping Cart</div>

        {/* Book content */}
        <div className={styles.cartpart}>
          <div className={styles.bookadd}>
            <Book_cart />
          </div>
          <div className={styles.totalprice}>
            <div className={styles.total}>Price:</div>
            <div className={styles.price}>₹999</div>
            <button className={styles.btnPrice}>CheckOut &#x2197;</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default cart;
