// Import Swiper React components
import styles from '../styles/bookSlider.module.scss';
import data from './bookData/fictionBook';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , {Autoplay} from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper';

function Slider(){
   SwiperCore.use([Autoplay])

  return (
 
    <Swiper
       
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
        
      
     spaceBetween= "5%"
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay:8000
      }}
      
      breakpoints={{
         0: {
          spaceBetween: 300,
          slidesPerView: 1,
         },

        //  300: {
        //   // spaceBetween: 10,
        //   slidesPerView: 1,
        //  },

        //  500: {
        //   // spaceBetween: 10,
        //   slidesPerView: 1,
        //  },

         600: {
          spaceBetween: 780,
          slidesPerView: 2,
         },

         900: {
          spaceBetween: 280,
          slidesPerView: 3,
         },

         1200: {
          spaceBetween: 280,
          slidesPerView: 5,
         },
       }
      } 

      >

       <SwiperSlide ><div className={styles.slide}>Slide 1</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 2</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 3</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 4</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 5</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 6</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 7</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 8</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 9</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 10</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 11</div></SwiperSlide>
       <SwiperSlide ><div className={styles.slide}>Slide 12</div></SwiperSlide>

       
    </Swiper>
  
  );
}
export default Slider
