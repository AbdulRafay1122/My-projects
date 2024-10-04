
// import React from 'react'

// const page = () => {
//   return (
//     <div className='w-10 h-7 bg-yellow-400 ml-12 mt-10 text-red-600'>rafay</div>
//   )
// }

// export default page

import Link from "next/link";
import React from 'react'


const Home = () => {
  return (
    <main>
    <Link href="/login"> Login </Link>
    <br />
    <br />
    <Link href="/about"> About </Link>
    <br />
    <br />
    <Link href="/contact"> Contact </Link>
    <br /> 
    <br />
    <Link href="/navbar"> Navbar </Link>
    <br />
    <br />
    <Link href="/footer"> Footer </Link>
    </main>
  )
}
export default Home
