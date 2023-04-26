import styles from "@/styles/Pages/popup.module.scss";
import Link from "next/link";
import Image from "next/image";

function footerpopup() {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup__content}>
          <div className={styles.logo}>
            <Image
            //   style={{"filter":"drop-shadow(5px 5px 5px #000)"}}
              className={styles.img}
              src="/logo1.svg"
              alt="logo"
              width={150}
              height={150}
            />
          </div>
           <div className={styles.box}>
           <div className={styles.part_1}>
            <Link className={styles.link} href="#">
              Contact Us
            </Link>
            <Link className={styles.link} href="#">
              Help
            </Link>
            <Link className={styles.link} href="#">
              Privacy Policy
            </Link>
            <Link className={styles.link} href="#">
              Socials
            </Link>
          </div>
          <div className={styles.part_2}>
            Built with ❤️ by{" "}
            <Link className={styles.link_2} href="#">
              Jyoti KM{" "}
            </Link>{" "}
            and
            <Link className={styles.link_2} href="#">
              {" "}
              SURAJ BHARDWAJ
            </Link>
            . This is our project website , build using next.js and Mongodb It
            is full stack website . It is responsible website. Copyright ©2023
            website is not live for services.
          </div>
           </div>
        </div>
      </div>
    </>
  );
}
export default footerpopup;
