import React, {useState, useContext} from 'react';
import { NetflixContext } from '../context/NetflixContext';
import {useRouter} from 'next/router';

const style = {
    wrapper: `w-[28rem] h-[38rem] flex items-center justify-center bg-[rgba(0,0,0,.7)]  text-white z-10`,
    loginCont: `flex flex-col gap-10 w-[20rem]`,
    formCont: `flex flex-col gap-2 `,
    inputs: `bg-[#333333] width-100% py-3 px-2 outline-none rounded`,
    signInButton: `bg-[#e50914] flex items-center justify-center rounded text-lg font-semibold cursor-pointer py-3 mt-7 hover:bg-red-800 duration-300`,
    bottomCont: `flex flex-col gap-3 text-[#8c8c8c] mt-10`,
    signUp: `text-white hover:underline cursor-pointer`,
}

const Login = () => {

    const {logIn} = useContext(NetflixContext);
    const router = useRouter();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleLogIn = async (e) => {
        e.preventDefault()
       try {
        await logIn(data.email, data.password)
        router.push('/home')
       } catch(error) {
           console.log(error)
           alert('Invalid Email address or password')
       }
    }

    

  return (
    <div className={style.wrapper}>
        <div className={style.loginCont}>
            <h1 className='text-4xl font-semibold'>Sign In</h1>
            <form action="" className={style.formCont}>
                <input 
                type="email" 
                className={style.inputs}
                placeholder='Email'
                name='email'
                value={data.email}
                onChange={e => setData({...data, email: e.target.value})} />
                <input 
                type="password" 
                className={style.inputs}
                placeholder='Password'
                value={data.password}
                onChange={e => setData({...data, password: e.target.value})} />
                <div className={style.signInButton} onClick={handleLogIn}>Sign In</div>
            </form>
            <div className={style.bottomCont}>
                <div className='flex gap-1'>
                    <p>New to Netflix?</p>
                    <p className={style.signUp} onClick={() => router.push('/signup')}>Sign up now</p>
                </div>
                <p className='text-sm'>This page is protected by Google reCAPTCHA to 
                ensure you are not a bot.<span className='text-blue-600 hover:underline'>Learn more</span> 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login
