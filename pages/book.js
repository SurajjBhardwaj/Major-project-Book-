import { Button, Typography  } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import styles from '../styles/Pages/book.module.scss'
import Image from 'next/image'

import * as React from 'react';
import Rating from '@mui/material/Rating';


function book(){

  
    return(
        <div className={styles.book__main}>

        {/* Side bar */}
         <div className={styles.sidebar}>
      
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      </div>

      {/* dashboard */}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      </div>

      {/* favrate */}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      </div>

      {/* Cart */}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      </div>

      {/*Profile Setting*/}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      </div>
         </div>

          {/* Verticle line */}
        <div className={styles.verLine}></div>

        {/* Main Contenent */}
        <div className={styles.content}>

                {/* box 1 -----search bar*/}
                <div className={styles.box1}>
                     {/* Search */}
                   <div className={styles.searchbar}>
                                 {/* icon */}
                                <div className={styles.search__icon}>
                                      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                      </svg>
                                </div>
 
                                {/* input */}
                                <input 
                                type='text' 
                                placeholder="search book name, author, edition..." 
                                className={styles.search__input} />
                                </div>
                </div>

                  
                {/* Box-2 -----profile*/}
                <div className={styles.box2}>
                {/* Profile */}
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

                {/* Background Color */}
                <div className={styles.item1}></div>
                
                
                {/* Book */}
                   <div className={styles.item2}>
                   <div className={styles.card}>
                         <Image src="/books/book5.png" width={260} height={360} className={styles.img} />
                         
                         </div>
                   </div>

                
                {/* Title */}
                <div className={styles.item3}>
                        <div className={styles.title}>
                               <div className={styles.div1}>
                                    Harry Potter : Half Blood Prince
                               </div>
                               <div className={styles.div2}>
                                   <Typography variant='h6'>JK Rowling</Typography>
                               </div>
                               <div className={styles.div3}>
                                    <Typography variant='body1' sx={{fontStyle:"italic"}}>Get ready to uncover the dark scerets and betrayals in the
                                    book. A thrilling adventure awaits you </Typography>
                               </div>
                               <div className={styles.div4}>
                                     <button className={styles.btn}>Start Reading   &#x2197; </button>
                               </div>


                               <div className={styles.div5}>
                                   <div className={styles.title__icon}>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                   </svg>
                                   </div>
                                    
                                    <div className={styles.title__icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                    </svg>
                                    </div>


                                    <div className={styles.title__icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    </div>

                                    
                               </div>
                        </div>
                </div>


                {/* Content */}
                <div className={styles.item4}>
                                    
                                    {/* Section 1 */}
                                   <div className={styles.sec1}> 
                                            <div className={styles.part1}>
                                                <Typography variant='h5'>Description</Typography>
                                            </div>
                                            <div className={styles.part2}>
                                                <Typography variant='body1'>The Story takes place during Harry's sixth year at
                                                Hogwarts School of Witchcraft and <br /> wizarry, Where he discovers more about Lord
                                                Voldemort's past and prophecy that foretells his defeat
                                                Where he discovers more about Lord </Typography>
                                            </div>
                                            <div className={styles.part3}>
                                               <Typography variant='body1'>The Story takes place during Harry's sixth year at
                                                Hogwarts School of Witchcraft and wizarry, "Where he discovers more about Lord
                                                Where he discovers more about Lord
                                                Voldemort's <br /> past and the prophecy" that foretells his defeat.</Typography>
                                            </div>
                                            <div className={styles.part4}>
                                                <Avatar alt="Seller_image" src="/profile/surajj.jpg" sx={{ width: 46, height: 46 }} /> 
                                            </div>
                                            <div className={styles.part5}>
                                                <Typography variant='h6'>Suraj Bhardwaj</Typography>
                                            </div>
                                            <div className={styles.part6}>
                                                <Typography variant='body2'>
                                                I Love Reading, I am from Jaladhar, Punjab
                                                I am non-fiction reader and read 2 books every month.
                                                In fiction, I love Mystery.
                                                </Typography>
                                            </div>
                                   </div>

                                    {/* Section 2 */}
                                   <div className={styles.sec2}> 
                                            <div className={styles.part1}>
                                            <Typography variant='h6'>Language</Typography>
                                            </div>
                                            <div className={styles.part2}>
                                            <Typography variant='body2'>
                                            Standard English (USA & UK)
                                            </Typography>
                                            </div>
                                            <div className={styles.part3}>
                                            <Typography variant='h6'className={styles.div} >Review</Typography>
                                            <Rating className={styles.div} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />                                            
                                            <Typography variant='h6'className={styles.div .div_3} >4.5</Typography>

                                            </div>
                                            <div className={styles.part4}>
                                            <Typography variant='h6'>Readers Friends</Typography>
                                            </div>
                                            <div className={styles.part5}>
                                                  <div className={styles.div1}>
                                                  <Avatar alt="Seller_image" src="/profile/ujala.png" sx={{ width: 46, height: 46 }} /> 
                                                  </div>
                                                  <div className={styles.div2}>
                                                  <Typography variant='h6'>Ujala Kumari</Typography>
                                                  </div>
                                                  <div className={styles.div3}>
                                                  <Typography variant='body2' sx={{fontStyle:'italic'}}> Quality of this book Good like first
                                                  hand book . This Impress me in first read.
                                                  </Typography>
                                                  </div>
                                            </div>
                                            <div className={styles.part6}>
                                            <div className={styles.div1}>
                                                  <Avatar alt="Seller_image" src="/profile/Aakash.png" sx={{ width: 46, height: 46 }} /> 
                                                  </div>
                                                  <div className={styles.div2}>
                                                  <Typography variant='h6'>Aakash Verma</Typography>
                                                  </div>
                                                  <div className={styles.div3}>
                                                  <Typography variant='body2' sx={{fontStyle:'italic'}}> Amazing , Delivery is so fast and with I got my favourite 
                                                  book which rare available in market.
                                                  </Typography>
                                                  </div>
                                            </div>
                                   </div>
                        
                </div>
        </div>
            
        </div>
    )
}
export default book

