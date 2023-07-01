import Sidebar from "@/Component/Sidebar";
import styles from "@/styles/Pages/home.module.scss";
import Image from "next/image";

import AutoSlider from "./autoSlider";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className={styles.book__main}>
        <Sidebar className={styles.sidebar} />

        {/* main page Contain */}

        <div className={styles.content}>
          <div className={styles.heading}>
            <Image
              className={styles.image}
              src="/twn.svg"
              alt="logo"
              width={700}
              height={700}
            />
            <div className={styles.row4}>
              <Link style={{ textDecoration: "none" }} href="/signin">
                <button className={styles.btn}>Start Reading</button>
              </Link>
            </div>
          </div>

          {/* <div className={styles.slider}> */}
          <AutoSlider className={styles.slider} />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
export default Home;
