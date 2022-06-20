import {useState, useEffect, useContext} from 'react'
import Image from 'next/image';
import { NetflixContext } from '../../context/NetflixContext';
import logo from '../../assets/logo.png';
import {FaSearch} from 'react-icons/fa';
import {MdNotifications} from 'react-icons/md';
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io';
import {RiNetflixFill} from 'react-icons/ri';
import profile from '../../assets/profile.png';
import {useRouter} from 'next/router';

const style = {
    wrapper: `flex items-center  w-screen h-[4rem] bg-transparent duration-700 px-10 gap-10 text-white fixed top-0 z-10`,
    wrapperrr: `flex items-center  w-screen h-[4rem] bg-black duration-300 px-10 gap-10 text-white fixed top-0 z-10`,
    navCont: `flex justify-between items-center w-screen `,
    mobileMenue: `lg:hidden cursor-pointer hover:text-[#8c8c8c] duration-300`,
    navOptions: `hidden lg:flex gap-3 text-[14.5px]`,
    options: `cursor-pointer hover:text-[#8c8c8c] duration-300`,
    iconsCont: `ml-20 flex items-center gap-5`,
    icons: ` lg:text-xl cursor-pointer `,
    profileItemsCont: `flex items-center gap-1 cursor-pointer`,
}

const Nav = ({}) => {
    const [navbar, setNavbar] = useState(false)
    const router = useRouter();
    const {dropDown, setDropDown, setMobileMenue, mobileMenue} = useContext(NetflixContext)

    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })
    
  return (
    <div className={navbar ? style.wrapperrr : style.wrapper}>
      <div>
      <RiNetflixFill className='text-xl text-red-700 md:hidden' />
      </div>
      <div className='hidden md:flex'>
      <Image
      src={logo}
      width={100}
      height={30}/>
      </div>      
      <div className={style.navCont}>
      <div className={style.mobileMenue} onClick={() => setMobileMenue(!mobileMenue)}>Browse</div>
          <div className={style.navOptions}>
              <h1 className={style.options} onClick={() => router.push('/home')}>Home</h1>
              <h1 className={style.options} onClick={() => router.push('/series')}>TV Shows</h1>
              <h1 className={style.options} onClick={() => router.push('/movies')}>Movies</h1>
              <h1 className={style.options}>New & Popular</h1>
              <h1 className={style.options} onClick={() => router.push('/list')} >My List</h1>
          </div>
          <div className={style.iconsCont}>
              <FaSearch className={style.icons} />
              <MdNotifications className='text-lg lg:text-3xl' />
              <div className={style.profileItemsCont} onClick={() => setDropDown(!dropDown)}>
              <Image
              src={profile}
              width={30}
              height={30} /> 
              {dropDown ? 
              <IoMdArrowDropup className={style.icons} /> 
              : <IoMdArrowDropdown className={style.icons} />}
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default Nav
