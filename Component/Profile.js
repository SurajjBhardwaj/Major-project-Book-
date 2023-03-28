import styles from '../styles/component/component.module.scss'
import Avatar from '@mui/material/Avatar'
import { Typography  } from '@mui/material'

function Profile(){
    return(
        <>
                   <div className={styles.profilebar}>
                        <div className={styles.pic}><Avatar alt="Remy Sharp" src="/profile/jyoti.png" sx={{ height:"4.5rem" , width:"4.5rem"}}/></div>
                        <div className={styles.name}><Typography variant='h5' sx={{padding:2, color:"#16151a"}}>Jyoti Kumari</Typography></div>
                        <div className={styles.icons}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                         </svg>
                        </div>
                    </div>
        </>
    )
}

export default Profile