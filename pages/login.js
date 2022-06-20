import React from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image';
import logo from '../assets/logo.png';
import Login from '../components/Login';


const style = {
    wrapper: `w-screen h-screen overflow-hidden text-white`,
    loginCont: `flex flex-col gap-10 w-screen h-screen  bg-gradient-to-b from-[#1a1a1a] to-[#4d4d4d]`,
    heroImg: `w-full h-full object-cover absolute mix-blend-overlay`,
}

const Loging = () => {
    const router = useRouter();
  return (
    <div className={style.wrapper}>
        <div className={style.loginCont}>
        <img 
        src='https://i0.wp.com/ravemotionpictures.com/wp-content/uploads/2022/03/Best-Movies-on-Netflix.jpg'
        className={style.heroImg}   />
        <div className='pt-5 px-10 cursor-pointer' onClick={() => router.push('/')}>
            <Image
            src={logo}
            width={170}
            height={55} />
        </div>
        <div className='flex items-center justify-center'>
        <Login />
        </div>
        </div>
    </div>
  )
}

export default Loging
