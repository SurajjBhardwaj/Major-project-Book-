// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , {Autoplay} from 'swiper';

import gif from '../Component/illutrator'
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

function AutoSlider(){
   SwiperCore.use([Autoplay])

  return (
    <Swiper
      
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2000
      }}
    >
     
      {/* <SwiperSlide>{gif.map(
        (item) => (
        
          <Image src={item.src} width={100} height={100} />
          )
      )}
      </SwiperSlide> */}

      <SwiperSlide><Image src='/images/gif6.svg' width={600} height={900} style={{  transform: "scaleX(-1)" }}  /></SwiperSlide>
      {/* <SwiperSlide><Image src='/images/gif3.svg' width={500} height={500} /></SwiperSlide> */}
      <SwiperSlide><Image src='/images/gif5.svg' width={600} height={900} style={{marginLeft:"1vw"}} /></SwiperSlide>
      <SwiperSlide><Image src='/images/gif4.svg' width={600} height={900} /></SwiperSlide>


     
    </Swiper>
  );
}
export default AutoSlider
