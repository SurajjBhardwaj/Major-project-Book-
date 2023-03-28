import Image from "next/image";
import styles from "../styles/component/cartBook.module.scss";
import data from "./bookData/favBook.js";
import { Rating } from "@mui/material";

function Book_cart() {
  return (
    <>
      <div className={styles.bookFav}>
        {data.map((item) => (
          <div className={styles.card}>
            <Image
              style={{ filter: "drop-shadow(-2rem 2rem 2rem #000000c4)" }}
              className={styles.imgcart}
              src={item.src}
              width={110}
              height={150}
            />
            <div className={styles.detail}>
              <div className={styles.part1}>
                <div className={styles.bookName}>{item.title}</div>
                <div className={styles.authorName}>{item.author} </div>
                <div className={styles.bookReview}>
                  <div className={styles.rating}>4.5</div>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                  
                </div>
              </div>
              <div className={styles.part2}>
                <button className={styles.btnRemove}>Remove</button>
                <div className={styles.bookPrice}>{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Book_cart;
