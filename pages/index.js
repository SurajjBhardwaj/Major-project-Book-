import Head from "next/head"
import Sidebar from "../component/Sidebar"
import styles from '../styles/Pages/main.module.scss'


import  AutoSlider from '../Component/autoSlider'


function Homepage(){
    return (
        <>
          <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          <style>
           @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@400;600;700;800;900&display=swap');
          </style>
        
          </Head>
          
          <div>


          <div className={styles.book__main}>
          <Sidebar />
           
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
                         <button className={styles.btn}>Start Reading &#x2197;</button>
                       </div>
                       </div> 


                       <div className={styles.slider}>
                          <AutoSlider />
                       </div>
         </div>      
                
               
          
          </div>
         </div>
        </>
    )
}
export default Homepage