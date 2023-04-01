import { Typography  } from '@mui/material';
import styles from '../styles/Pages/dashboard.module.scss';


import Profile from "@/Component/Profile";
import SearchBar from "@/Component/searchBar";
import Sidebar from "@/Component/Sidebar";
import BookSlider from '@/Component/bookSlider';

function sidebar(){
    return(
      <>
       <div className={styles.book__main}>
          
          <Sidebar />
          
        <div className={styles.main}>
                    {/* Box 1 */}
                  <div className={styles.box1}>
                     <SearchBar />
                  </div>

                  {/* Box 2 */}
                  <div className={styles.box2}>
                    <Profile />
                  </div>

                  {/* Row 1 -------background*/}
                  <div className={styles.row1}></div>

                   {/* Row 2 -------background*/}
                  <div className={styles.row2}></div>  


                   {/* Row 3 */}
                  <div className={styles.row3}>
                  <Typography variant='h2' className={styles.heading1} sx={{fontFamily:"serif" }}>
                      Fiction Books
                  </Typography>
                  <div className={styles.card1}>
                    <BookSlider />
                  </div>
                  

                  <Typography variant='h2' className={styles.heading2} sx={{fontFamily:"serif"}}>
                      Non - Fiction Books
                  </Typography>
                  <div className={styles.card2}>
                    <BookSlider />
                  </div>


                  </div>     
                         
           </div>
                  
          
      </div>
      </>
    )
}
export default sidebar
