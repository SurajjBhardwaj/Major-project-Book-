// Import Swiper React components
import styles from "styles/component/bookSlider.module.scss";
import data from "Component/bookData/fictionBook";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation, Mousewheel, Keyboard, Pagination } from "swiper";


function BookSlider() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper

      style={{
        "--swiper-navigation-color": "#000 ",
        "--swiper-pagination-color": "#000 ",
      }}
      
      direction={"vertical"}
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      pagination={{
          clickable: true,
        }}
      modules={[Navigation, Mousewheel, Keyboard, Pagination]}
      className="mySwiper"
      spaceBetween={5}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 500,
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
