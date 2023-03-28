// Import Swiper React components
import styles from "../styles/bookSlider.module.scss";
import data from "./bookData/fictionBook";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation, Mousewheel, Keyboard } from "swiper";


function BookSlider() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper

      style={{
        "--swiper-navigation-color": "#888 ",
        "--swiper-pagination-color": "#888 ",
      }}
      
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
      spaceBetween={5}
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay: 8000,
      }}
      breakpoints={{
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        300: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
        650: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        900: {
          spaceBetween: 10,
          slidesPerView: 4,
        },

        1300: {
          spaceBetween: 10,
          slidesPerView: 5,
        },

        1900: {
          spaceBetween: 10,
          slidesPerView: 6,
        },
      }}
    >
      {data.map((item) => (
        <div>
          <SwiperSlide>
            <div className={styles.card}>
              <Image
                className={styles.img}
                src={item.src}
                width={200}
                height={300}
              />
              <div className={styles.caption}>{item.title}</div>
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}
export default BookSlider;
