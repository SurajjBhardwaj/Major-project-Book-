import Image from "next/image";
import styles from "../styles/component/favBook.module.scss";
import data from "./bookData/favBook.js";

function Book_fav() {
  return (
    <>
      <div className={styles.bookFav}>
      {data.map((item) => (
        <div className={styles.card}>
          <Image
            className={styles.img}
            src={item.src}
            width={150}
            height={200}
          />
          <div className={styles.detail}>
          <div className={styles.bookName}>{item.title}</div>
          <div className={styles.authorName}>{item.author} </div>
          <div className={styles.bookPrice}>{item.price}</div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}
export default Book_fav;
