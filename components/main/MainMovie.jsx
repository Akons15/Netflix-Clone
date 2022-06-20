import React from 'react'
import Image from 'next/image';
import movie from '../../assets/mainMovie.webp';
import {FaPlay} from 'react-icons/fa';
import {FiInfo} from 'react-icons/fi';

const style = {
    wrapper: `flex items-center w-full h-[35rem] bg-hero text-white `,
    infoCont: `flex flex-col gap-3 ml-10`,
    text: `text-[15px] font-semibold`,
    buttonsCont: `flex gap-2`,
    buttons: `flex items-center justify-center gap-2 px-10 py-2  cursor-pointer bg-white text-black text-xl font-semibold rounded hover:opacity-40 duration-300`,
}

const MainMovie = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.infoCont}>
            <Image
            src={movie}
            width={500}
            height={200} />
            <p className={style.text}>After a womens at home DNA test reveals multiple half siblings, <br />
            she discovers a shocking scheme involving donor sperm and a <br />
            popular fertility doctor.</p>

            <div className={style.buttonsCont}>
                <div className={style.buttons}>
                  <FaPlay />
                  <h1>Play</h1>
                </div>
                <div className={`${style.buttons} bg-[#6d6d6e] hover:opacity-70`}>
                  <FiInfo className='text-2xl' />
                  <h1>More Info</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainMovie
