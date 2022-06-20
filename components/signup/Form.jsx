import React, {useEffect, useContext, useState} from 'react'
import { NetflixContext } from '../../context/NetflixContext';
import {useRouter} from 'next/router';
import Fade from 'react-reveal/Fade';

const style = {
    wrapper: `flex items-center justify-center  w-[40rem] h-[40rem] `,
    signUpCont: `flex flex-col gap-5 `,
    titleCont: `flex flex-col gap-1 px-10 md:px-0`,
    title: `text-2xl md:text-4xl font-semibold`,
    form: `flex flex-col gap-2  px-10  md:px-0 w-full`,
    inputs: `w-full py-3 px-2 outline-none rounded border border-black`,
    radioSection: `flex items-center text-sm px-10 md:px-0  md:text-[17px] gap-2`,
    button: `bg-[#e50914] flex items-center justify-center w-[17.5rem] ml-10 md:ml-0 md:w-full text-white text-2xl py-3 rounded cursor-pointer`,
}

const Form = () => {

    const router = useRouter();

    const {signUp} = useContext(NetflixContext);
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleSignIn = async () => {
        try {
            await signUp(data.email, data.password)
            router.push('/home')
        } catch(error) {
            console.log(error)
            alert('Invalid Email address !')
        }
    }

  return (
      <Fade>
    <div className={style.wrapper}>
      <div className={style.signUpCont}>
          <div className={style.titleCont}>
          <p className='text-sm'>STEP <span className='font-semibold'>2</span>  OF <span className='font-semibold'>2</span> </p>
              <h1 className={style.title}>Create a password to start <br /> 
              your membership</h1>
          </div>
          <p className='px-10 md:px-0'>Just a one more step and you are done!</p>
          <form className={style.form}>
              <input 
              className={style.inputs} 
              type="email"
              name='email'
              required
              placeholder='Email'
              value={data.email}
              onChange={e => setData({...data, email: e.target.value})} />
              <input 
              className={style.inputs} 
              type="password"
              placeholder='Password'
              value={data.password}
              onChange={e => setData({...data, password: e.target.value})} />
          </form>
          <div className={style.radioSection}>
          <input type="checkbox" className='w-7 h-7' />
          <p>Plese do not email me Netflix special offers.</p>
          </div>
          <div className={style.button} onClick={handleSignIn}>Next</div>
      </div>
    </div>
    </Fade>
  )
}

export default Form
