
// Import Swiper styles
import 'swiper/css';

// Import Swiper React components
import styles from '../styles/Pages/home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , {Autoplay} from 'swiper';

import Image from 'next/image';


function AutoSlider(){
  SwiperCore.use([Autoplay])
  return (
 
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2000
      }}
    >
     
    
      <SwiperSlide className={styles.Slider}><Image className={styles.gif} src='/images/gif6.svg'  alt='gif1' width={600} height={900} style={{  transform: "scaleX(-1)" }}  /></SwiperSlide>
      <SwiperSlide className={styles.Slider}><Image  className={styles.gif} src='/images/gif5.svg' alt='gif2' width={600} height={900} style={{marginLeft:"1vw"}} /></SwiperSlide>
      <SwiperSlide className={styles.Slider}><Image  className={styles.gif} src='/images/gif4.svg' alt='gif3' width={600} height={900} /></SwiperSlide> 
    

     
    </Swiper>
  
  );
}
export default AutoSlider
