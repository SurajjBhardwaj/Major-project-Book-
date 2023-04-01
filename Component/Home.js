import Sidebar from "@/Component/Sidebar";
import styles from '@/styles/Pages/home.module.scss';


import  AutoSlider from './autoSlider';
import Link from "next/link";


function Home(){
    return (
        <>
        <div className={styles.book__main}>
          <Sidebar className={styles.sidebar}/>
           
          {/* main page Contain */}

         
         <div className={styles.content}>

                      <div className={styles.heading}>
                       <div className={styles.row1}>
                        Town of 
                       </div>
                       <div className={styles.row2}>
                        Books
                       </div>
                       <div className={styles.row3}>
                        BOOKS WITHOUT HUSTLE IN YOUR TOWN
                       </div>
                       <div className={styles.row4}>
                       
                       <Link  style={{"textDecoration":"none"}} href='/signin'>
                         <button className={styles.btn}> 
                         Start Reading &#x2197;
                         </button>
                       </Link>

                       </div>
                       </div> 


                       <div className={styles.slider}>
                          <AutoSlider />
                       </div>
         </div>      
                
               
          
        </div>
        </>
    )
}
export default Home