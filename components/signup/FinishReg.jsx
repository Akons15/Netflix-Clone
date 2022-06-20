import React from 'react'
import Image from 'next/image';
import device from '../../assets/devices.png';

const style = {
    wrapper: `flex items-center justify-center w-[40rem] h-[40rem] `,
    signUpCont: `flex flex-col gap-5 items-center text-center`,
    titleCont: `flex flex-col gap-1`,
    title: `text-4xl font-semibold`,
    button: `bg-[#e50914] w-full text-white text-2xl py-3 rounded cursor-pointer`,
}

const FinishReg = ({setShowForm}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.signUpCont}>
          <Image
          src={device}
          width={200}
          height={70} />
          <div className={style.titleCont}>
              <p className='text-sm'>STEP <span className='font-semibold'>1</span>  OF <span className='font-semibold'>2</span> </p>
              <h1 className={style.title}>Finish setting up your <br /> account</h1>
          </div>
          <p className='text-lg'>Netflix is personalized for you. Create <br /> 
          a password to watch on any device <br /> at any time.</p>
          <div className={style.button} onClick={() => setShowForm(true)}>Next</div>
      </div>
    </div>
  )
}


export default FinishReg
