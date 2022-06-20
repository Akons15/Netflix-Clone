import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import tv from '../../assets/tv.png';
import mac from '../../assets/mac.png';
import mobile from '../../assets/mobile.jpg';
import boxshot from '../../assets/boxshot.png';
import kids from '../../assets/kidsN.png';
import {HiDownload} from 'react-icons/hi';

const style = {
    wrapper: `w-screen h-[123rem] text-white `,
    cont: `grid place-items-center justify-items-center text-center py-5 lg:flex items-center justify-evenly h-[35rem] lg:h-[30rem]`,
    titleCont: `flex flex-col gap-3`,
    title: `text-2xl lg:text-5xl font-bold`,
    text: `text-xl lg:text-3xl `,
    phoneCont: `flex items-center justify-between px-5 w-[20rem] h-[6rem] bottom-5 left-[2rem] sm:left-[6rem] bg-black absolute rounded-lg border-2 border-gray-600`,
    devider: 'w-screen h-2 bg-[#404040]',
}

const Main = () => {
  return (
    <div className={style.wrapper}>
            <Fade >
            <div className={style.cont}>
        <div className={style.titleCont}>
            <h1 className={style.title}>Enjoy on your TV.</h1>
            <p className={style.text}>Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players, <br /> and more.</p>
        </div>
        <div className='flex relative'>
            <Image
            src={tv}
            className='z-10'
            width={450}
            height={340} />
            <video width={326} 
            autoPlay muted
            className='absolute top-[4.5rem] left-[60px]'
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            />
        </div>
        </div>
            </Fade>
            <div className={style.devider} />
            <Fade left>
            <div className={style.cont}>
            <div className={`${style.titleCont}  lg:hidden`}>
            <h1 className={style.title}>Download your shows to watch <br/> offline.</h1>
            <p className={style.text}>Save your favorites easily and always have <br /> something to watch.</p>
        </div>
        <div className='flex relative'>
            <Image
            src={mobile}
            width={500}
            height={400}
             />
             <div className={style.phoneCont}>
                 <Image
                 src={boxshot}
                 width={50}
                 height={70} />

                 <h1 className='mr-10 text-lg font-semibold'>Downloading...</h1>

                 <HiDownload className='text-xl' />
             </div>
        </div>
        <div className={`${style.titleCont} hidden lg:flex`}>
            <h1 className={style.title}>Download your shows <br /> to watch offline.</h1>
            <p className={style.text}>Save your favorites easily and always have <br /> something to watch.</p>
        </div>
        </div>
            </Fade>


            <div className={style.devider} />
            <Fade right>
            <div className={style.cont}>
        <div className={style.titleCont}>
            <h1 className={style.title}>Watch everywhere.</h1>
            <p className={style.text}>Stream unlimited movies and TV shows on <br /> your phone, tablet, laptop, and TV without <br /> playing more.</p>
        </div>
            <div className='flex relative'>
            <Image
            src={mac}
            className='z-10'
            width={450}
            height={340} />
            <video width={290} 
            autoPlay muted
            className='hidden sm:flex absolute top-[3rem] left-[5rem] '
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            />
        </div>
        </div>
            </Fade>

            <div className={style.devider} />
            <Fade>
            <div className={`${style.cont} h-[40rem]`}>
            <div className={`${style.titleCont}  lg:hidden`}>
            <h1 className={style.title}>Create profiles for <br /> kids.</h1>
            <p className={style.text}>Send kids on adventures with their favorite 
            <br /> characters in a space made just for them—free <br />
            with your membership.</p>
        </div>
        <div className='flex relative'>
            <Image
            src={kids}
            width={500}
            height={400}
             />
        </div>
        <div className={`${style.titleCont} hidden lg:flex`}>
            <h1 className={style.title}>Create profiles for <br /> kids.</h1>
            <p className={style.text}>Send kids on adventures with their favorite 
            <br /> characters in a space made just for them—free <br />
            with your membership.</p>
        </div>
        </div>
        <div className={style.devider} />
            </Fade>

            
    </div>
  )
}

export default Main
