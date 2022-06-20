import React, {useState, useContext} from 'react';
import {useRouter} from 'next/router';
import { NetflixContext } from '../../context/NetflixContext';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const style = {
    wrapper: `w-screen h-[44rem] bg-gradient-to-b from-[#1a1a1a] to-[#4d4d4d]`,
    heroImage: `w-full h-[44rem] object-cover absolute mix-blend-overlay `,
    nav: `flex justify-between pt-6 px-[2rem] md:px-[3rem] `,
    button: `bg-[#e50914] text-white w-[4rem] text-sm lg:text-base h-[1.5rem] lg:w-[5.5rem] lg:h-[2.5rem] rounded flex items-center justify-center z-10 font-semibold cursor-pointer hover:bg-red-800 duration-300`,
    formContContainer: `flex items-center justify-center mt-[10rem] text-white `,
    formCont: `flex flex-col items-center text-center gap-5 w-[50rem] h-[20rem] z-10`,
    formTitle: `text-3xl w-screen lg:text-5xl font-semibold`,
    form: `grid place-items-center gap-3 lg:gap-0 lg:flex lg:w-[42rem] h-[3.5rem] `,
    input: `w-[20rem] py-3 lg:w-[100%] h-full text-black outline-none px-2`,
    formButton: `flex items-center gap-2 justify-center bg-[#e50914] h-[2.5rem] w-[7.5rem] rounded lg:w-[16rem] lg:h-full text-base lg:rounded-none lg:text-2xl cursor-pointer`,
}

const Top = () => {
    const router = useRouter();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const validateEmail = (email) => {
        if(email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            router.push('/signup')
        } else {
            alert('Invalid Email!')
        }
      };


  return (
    <div className={style.wrapper}>
        <img 
        src='https://i0.wp.com/ravemotionpictures.com/wp-content/uploads/2022/03/Best-Movies-on-Netflix.jpg'
        className={style.heroImage}   />
        <div className={style.nav}>
            <div className='w-[5rem] lg:w-full'>
            <Image
            src={logo}
            width={140}
            height={45} />
            </div>
            <div className={style.button} onClick={() => router.push('/login')}>
                <h1>Sign In</h1>
            </div>
        </div>

        <div className={style.formContContainer}>
        <div className={style.formCont}>
            <h1 className={style.formTitle}>Unlimited movies, TV shows, and  more.</h1>
            <p className='text-xl lg:text-2xl font-semibold'>Watch anywhere. Cancel anytime.</p>
            <p className='w-screen text-lg px-5 font-semibold'>Ready to watch? Enter your email to create or restart your membership.</p>
            <form action="" className={style.form}>
                <input 
                type="email"
                required 
                className={style.input}
                value={data.email}
                name='email'
                placeholder='Email Address'
                onChange={e => setData({...data, email: e.target.value})} />
                <div className={style.formButton} onClick={() => validateEmail(data.email)}>
                <h1>Get Started</h1>
                <MdOutlineArrowForwardIos className='text-sm lg:text-xl lg:mt-1' />
                </div>
            </form>
        </div>
        </div>
        

    </div>
  )
}

export default Top
