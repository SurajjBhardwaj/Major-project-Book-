import Link from "next/link";

function bookDynamic({books})
{
    return(
        <>
         <h1>Book list</h1>
         {
            data.map(
                books =><Link href="/bookdynamic/1">
         <li>{books.title}</li>
         </Link>
            )
         }

         
         
         
        </>
    )
}

export default bookDynamic

export async function getStaticProps(){
    const response = await fetch('../../Component/bookData/fictionBook.js')
    const data = await response.json()

    return(
        {
            props:{  books:data.slice(0,3)  }
        }
    )
}