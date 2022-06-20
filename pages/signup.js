import React, {useState} from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';
import logo from '../assets/logo.png';
import FinishReg from '../components/signup/FinishReg';
import Form from '../components/signup/Form';


const style = {
    wrapper: `w-screen h-screen overflow-hidden`,
    navCont: `flex items-center justify-between py-5 px-10`,
    signInCont: `text-xl font-semibold hover:underline cursor-pointer`,
    signUpCont: `flex items-center justify-center w-screen h-[40rem] `,
}

const SignUp = () => {
    const [showForm, setShowForm] = useState(false)
    const router = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.navCont}>
          <Image
          onClick={() => router.push('/')}
          className='cursor-pointer'
          src={logo}
          width={170}
          height={55} />
          <div className={style.signInCont} onClick={() => router.push('/login')}>Sign In</div>
      </div>
      <div className={style.signUpCont}>
          {showForm ? (
            <Form /> 
          ) : (
            <FinishReg setShowForm={setShowForm} />
          )}
      </div>
    </div>
  )
}

export default SignUp
