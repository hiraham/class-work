import React from 'react';
import Link from'next/link';

const Header = () => {
  return (
    <div>
       <header>
       <h1 className=' bg-hira text-5xl text-pretty text-center py-6  font-extrabold border-spacing-6 border-cyan-900 text-cyan-800 '> Welcome to my cooking websites</h1>
     <div className='text-center py-4 text-1xl font-extrabold text-cyan-800 bg-secondery '>
<nav>   
    <Link href="./">Home</Link> 
    <Link href="./about us"> About</Link>
    <Link href ="./contact">Contact </Link>
   
</nav>
</div>
</header>
    </div>
  );
}

export default Header;
