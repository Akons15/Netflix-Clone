import React, {useContext} from 'react'
import {useRouter} from 'next/router';
import {NetflixContext} from '../../context/NetflixContext';


const style = {
    wrapper: `lg:hidden flex flex-col  w-[16rem] h-[15rem] border-t border-white text-white fixed  top-[4.5rem] z-10`,
    options: `flex items-center justify-center w-full h-[4rem] bg-[rgba(0,0,0,.9)] cursor-pointer text-sm hover:bg-[rgba(0,0,0,.8)] duration-300`,
}

const MobileMenue = () => {
    const router = useRouter();
    const {setMobileMenue} = useContext(NetflixContext);

  return (
    <div className={style.wrapper}>
      <div className={style.options} onClick={() => {
          router.push('/home')
          setMobileMenue(false)
      }}>
          Home
      </div>
      <div className={style.options} onClick={() => {
          router.push('/series')
          setMobileMenue(false)
      }}>
          TV Shows
      </div>
      <div className={style.options} onClick={() => {
          router.push('/movies')
          setMobileMenue(false)
      }}>
          Movies
      </div>
      <div className={style.options}>
          New & Popular
      </div>
      <div className={style.options} onClick={() => {
          router.push('/list')
          setMobileMenue(false)
      }}>
          My List
      </div>
    </div>
  )
}

export default MobileMenue
