import { Typography  } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import styles from '../styles/Pages/Sidebar.module.scss'

import CarouselRatio from '../component/bookSlider'
import Sidebar from "../component/Sidebar"
// import styles from '../styles/Pages/global.module.scss'

function sidebar(){
    return(
      <>
        <div className={styles.dashboard}>
          <Sidebar />

          <div className={styles.main}>
                    {/* Box 1 */}
                  <div className={styles.box1}>
                      <div className={styles.searchbar}>
     
                        <div className={styles.search__icon}>
                              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                              </svg>
                        </div>

                        <input 
                         type='text' 
                         placeholder="search book name, author, edition..." 
                         className={styles.search__input} />
                        </div>
                  </div>

                  {/* Box 2 */}
                  <div className={styles.box2}>
                    <div className={styles.profilebar}>
                         <Avatar alt="Remy Sharp" src="/profile/jyoti.png" />
                         <Typography variant='body1' sx={{padding:2, color:"#16151a"}}>Jyoti Kumari</Typography>
                        <div className={styles.icons}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                         </svg>
                        </div>
                    </div>
                  </div>

                  {/* Row 1 -------background*/}
                  <div className={styles.row1}></div>

                   {/* Row 2 -------background*/}
                  <div className={styles.row2}></div>  


                   {/* Row 3 */}
                  <div className={styles.row3}>
                  <Typography variant='h3' className={styles.heading1} sx={{fontFamily:"serif"}}>
                      Fiction Books
                  </Typography>
                  <div className={styles.card1}>
                    <CarouselRatio />
                  </div>
                  

                  <Typography variant='h3' className={styles.heading2} sx={{fontFamily:"serif"}}>
                      Non - Fiction Books
                  </Typography>
                  <div className={styles.card2}>
                    <CarouselRatio />
                  </div>


                  </div>     
                         
           </div>
                  
          
      </div>
      </>
    )
}
export default sidebar
