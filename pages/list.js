import React, {useContext} from 'react'
import Dropdown from '../components/main/Dropdown'
import MobileMenue from '../components/main/MobileMenue'
import Nav from '../components/main/Nav'
import { NetflixContext } from '../context/NetflixContext'

const style = {
  wrapper: `w-full h-screen bg-[#141414] text-white `,
  emptyListCont: `grid place-items-center text-xl lg:flex items-center justify-center w-full h-screen md:text-4xl lg:text-5xl`,
  listCont: `flex flex-col gap-5 w-screen h-full bg-[#141414] pt-[5rem] px-5 text-4xl`,
  movieCont: `grid place-items-center w-full h-[50rem] pt-2 overflow-scroll no-scroll  md:place-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-y-5`,
}

const List = () => {
const {myList, dropDown, mobileMenue} = useContext(NetflixContext);
console.log(myList)

  return (
    <div className={style.wrapper}>
      <div>
        <Nav />
      </div>
      {dropDown && (
          <Dropdown />
      )}
      {mobileMenue && (
          <MobileMenue />
      )}
        <div className={style.listCont}>
          <h1>My List</h1>
          {myList.length === 0 && (
            <div className={style.emptyListCont}>No Movies or TV Shows added...</div>
          )}
          <div className={style.movieCont}>
        {myList.map((item, index) => (
            <img 
            key={index}
            src={item} 
            width={200} 
            height={200} 
            alt="" />
        ))}
        </div>
        </div>
      
    </div>
  )
}

export default List
