import { Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import styles from "../styles/Pages/book.module.scss";
import Image from "next/image";

import * as React from "react";
import Rating from "@mui/material/Rating";
import Sidebar from "@/Component/Sidebar";
import SearchBar from "@/Component/searchBar";
import Profile from "@/Component/Profile";

function book() {
  return (
    <div className={styles.book__main}>
      <Sidebar />
      {/* Main Contenent */}
      <div className={styles.detail}>
        {/* box 1 -----search bar*/}
        <div className={styles.box1}>
          <SearchBar />
        </div>

        {/* Box-2 -----profile*/}
        <div className={styles.box2}>
          <Profile />
        </div>

        {/* Background Color */}
        <div className={styles.background}></div>

        {/* Book */}
        <div className={styles.card}>
          <Image
            src="/books/book5.png"
            width={260}
            height={360}
            className={styles.img}
          />
        </div>


        {/* Title */}

        <div className={styles.title}>
          <div className={styles.div1}>Harry Potter : Half Blood Prince</div>
          <div className={styles.div2}>JK Rowling</div>
          <div className={styles.div3}>
            Get ready to uncover the dark scerets and betrayals in the book. A
            thrilling adventure awaits you
          </div>
          <div className={styles.div4}>
            <button className={styles.btn}>Start Reading &#x2197; </button>
          </div>

          <div className={styles.div5}>
            <button className={styles.title__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </button>

            <button className={styles.title__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>

            <button className={styles.title__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={styles.item4}>
          {/* Section 1 */}
          <div className={styles.sec1}>
            <div className={styles.part1}>Description</div>
            <div className={styles.part2}>
              The Story takes place during Harry's sixth year at Hogwarts School
              of Witchcraft and wizarry, Where he discovers more about Lord
              Voldemort's past and prophecy that foretells his defeat Where he
              discovers more about Lord
            </div>
            <div className={styles.part3}>
              The Story takes place during Harry's sixth year at Hogwarts School
              of Witchcraft and wizarry, "Where he discovers more about Lord
              Where he discovers more about Lord Voldemort's past and the
              prophecy" that foretells his defeat.
            </div>
            <div className={styles.part4}>
              <Avatar
                alt="Seller_image"
                src="/profile/surajj.jpg"
                sx={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className={styles.part5}>Suraj Bhardwaj</div>
            <div className={styles.part6}>
              I Love Reading, I am from Jaladhar, Punjab I am non-fiction reader
              and read 2 books every month. In fiction, I love Mystery.
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.sec2}>
            <div className={styles.part1}>Language</div>
            <div className={styles.part2}>Standard English (USA & UK)</div>
            <div className={styles.part3}>
              <div className={styles.rev}>Review</div>
              <Rating
                className={styles.rev}
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
              <div className={styles.rev}> 4.5</div>
            </div>
            <div className={styles.part4}>Readers Friends</div>
            <div className={styles.part5}>
              <div className={styles.div1}>
                <Avatar
                  alt="Seller_image"
                  src="/profile/ujala.png"
                  sx={{ width: "3.5rem", height: "3.5rem" }}
                />
              </div>
              <div className={styles.div2}>Ujala Kumari</div>
              <div className={styles.div3}>
                Quality of this book Good like first hand book . This Impress me
                in first read.
              </div>
            </div>
            <div className={styles.part6}>
              <div className={styles.div1}>
                <Avatar
                  alt="Seller_image"
                  src="/profile/Aakash.png"
                  sx={{ width: "3.4rem", height: "3.4rem" }}
                />
              </div>
              <div className={styles.div2}>Aakash Verma</div>
              <div className={styles.div3}>
                Amazing , Delivery is so fast and with I got my favourite book
                which rare available in market.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default book;
