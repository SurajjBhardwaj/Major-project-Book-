import styles from '../styles/Pages/Sidebar.module.scss'
import Image from 'next/image';
import data from './bookData/fictionBook'
import Box from '@mui/joy/Box';




export default function CarouselRatio() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        // width: 343,
        height: 350,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
                <div className={styles.card}>
                    <Image src={item.src} width={170} height={270} className={styles.img} />
                    <div className={styles.caption}>{item.title}</div>
                </div>
      ))}
    </Box>
  );
}