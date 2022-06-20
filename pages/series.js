import React, {useState, useContext} from 'react';
import Nav from '../components/main/Nav';
import { NetflixContext } from '../context/NetflixContext';
import {IoMdArrowDropdown} from 'react-icons/io';
import {RiArrowGoBackFill} from 'react-icons/ri';
import MobileMenue from '../components/main/MobileMenue';


const style = {
    wrapper: `w-screen h-[60rem] bg-[#141414]`,
    mainCont: `flex  gap-5 pt-[5rem] px-10 text-white text-2xl`,
    defaultCont: `w-full h-full  text-white`,
    defaultOptionsCont: `flex items-center justify-between  `,
    genresCont: `flex justify-between items-center border border-white text-lg font-semibold w-[9rem] px-2 py-1 cursor-pointer`,
    genresOptionsCont: `absolute text-white w-[9rem] h-[94px] top-[8rem] right-[1.5rem] border border-gray-300`,
    genresOptions: `flex flex-col gap-1 items-center w-full h-full text-lg font-semibold`,
    genresOption: `w-full flex justify-center hover:bg-gray-500 duration-300 cursor-pointer `,
    listCont: `flex flex-col gap-5 w-full text-white h-full bg-[#141414]  text-4xl`,
    movieCont: `grid place-items-center w-full h-[40rem] pt-2 overflow-scroll no-scroll md:place-items-start  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5`,
    backIcon: `hover:text-gray-500 duration-300 cursor-pointer`,
}

const Series = () => {
    const [filteredMovie, setFilteredMovie] = useState('');
    const [closeGenresOptions, setCloseGenresOptions] = useState(true);
    const {trendingMovie, mobileMenue} = useContext(NetflixContext);


    const handleFilteredMovie = option => {
        switch (option) {
            case 'crime':
                return (
                    <div className={style.listCont} >
                    <h1>Crime</h1>
                    <div className={style.movieCont}>
                    { 
                    trendingMovie
                    .filter(number => number.genres[1] === 80)
                    .map((number, index) => (
                    <img src={number.posterURLs.original} width={200} alt="" key={index} />
                    )) 
                    }
                    </div>
                    </div>
                )

            case 'biography':
                return  (
                    <div className={style.listCont} >
                    <h1>Biography</h1>
                    <div className={style.movieCont}>
                    { 
                    trendingMovie
                    .filter(number => number.genres[0] === 1)
                    .map((number, index) => (
                    <img src={number.posterURLs.original} width={200} alt="" key={index} />
                    )) 
                    }
                    </div>
                    </div>
                )

            case 'drama':
                return  (
                    <div className={style.listCont} >
                    <h1>Drama</h1>
                    <div className={style.movieCont}>
                    { 
                    trendingMovie
                    .filter(number => number.genres[0] === 18)
                        .map((number, index) => (
                    <img src={number.posterURLs.original} width={200} alt="" key={index} />
                    )) 
                    }
                    </div>
                    </div>
                )
            default:
                return (
                    <div className={style.defaultCont}>
                        <div className={style.defaultOptionsCont}>
                            <h1 className='text-4xl font-semibold'>Series</h1>
                            <div className={style.genresCont}
                            onClick={() => setCloseGenresOptions(!closeGenresOptions)} >
                                <h1>Genres</h1>
                                <IoMdArrowDropdown className='text-xl mt-1.5'  />
                            </div>
                        </div>
                    </div>
                )
        }
    }
    
  return (
    <div className={style.wrapper}>
      <Nav />
      {mobileMenue && (
          <MobileMenue />
      )}
      <div className={style.mainCont}>

          {filteredMovie === ''  && (
              <div className={closeGenresOptions ? `hidden` : style.genresOptionsCont}>
              <div className={style.genresOptions}
              >
                  <h1 className={style.genresOption} 
                  onClick={() => {
                    setFilteredMovie('crime')
                    setCloseGenresOptions(!closeGenresOptions)
                  }}>Crime</h1>
                  <h1 className={style.genresOption}
                  onClick={() => {
                    setFilteredMovie('drama')
                    setCloseGenresOptions(!closeGenresOptions)
                  }}>Drama</h1>
                  <h1 className={style.genresOption}
                  onClick={() => {
                    setFilteredMovie('biography')
                    setCloseGenresOptions(!closeGenresOptions)
                  }}>Biography</h1>
              </div>
          </div>
          )}


          {filteredMovie !== '' && (
              <RiArrowGoBackFill className={style.backIcon}
              onClick={() => setFilteredMovie('')} />
          )}


          {handleFilteredMovie(filteredMovie)}
          </div>
    </div>
  )
}

export default Series