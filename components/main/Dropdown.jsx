import React, {useContext} from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';
import profile from '../../assets/profile.png';
import { NetflixContext } from '../../context/NetflixContext';
import {BiLock, BiHelpCircle} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {ImPencil2} from 'react-icons/im';

const style = {
    wrapper: `flex flex-col  w-[11rem] h-60 py-5 bg-[rgba(0,0,0,.9)]  duration-700 fixed text-white right-[3rem] top-[4.5rem] z-10`,
    topCont: `flex flex-col gap-4 border-b border-gray-400 pb-5`,
    bottomCont: `flex flex-col gap-4 border-b border-gray-400 pt-3 pb-3`,
    optionsCont: `flex items-center px-3 gap-2 cursor-pointer`,
    optionsText: `hover:underline text-sm `,
    icons: `text-2xl`,
    buttonCont: `flex items-center justify-center py-3 text-sm cursor-pointer `,
}

const Dropdown = ({setDropDown}) => {
  const {logOut, userName} = useContext(NetflixContext);
  const router = useRouter();
  console.log(userName)

  return (
    <div className={style.wrapper}>
      <div className={style.topCont}>
      <div className={style.optionsCont}>
        <Image
        src={profile}
        width={25}
        height={25} />
        <h1 className={style.optionsText}>{userName}...</h1>
        <BiLock className='text-xs' />
      </div>
      <div className={`${style.optionsCont} ml-1 `}>
        <ImPencil2 className='text-xl' />
        <h1 className={style.optionsText}>Manage profiles</h1>
      </div>
      </div>
      <div className={style.bottomCont}>
        <div className={style.optionsCont}>
          <BsPerson className={style.icons} />
          <h1 className={style.optionsText}>Account</h1>
        </div>
        <div className={style.optionsCont}>
          <BiHelpCircle className={style.icons} />
          <h1 className={style.optionsText}>Help Center</h1>
        </div>
      </div>
      <div className={style.buttonCont}>
        <div onClick={() => {
          logOut()
          router.push('/')
          setDropDown(false)
        }}>Sign out of Netflix</div>
      </div>
      
    </div>
  )
}

export default Dropdown
