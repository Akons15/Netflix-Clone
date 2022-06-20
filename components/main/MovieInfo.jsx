import React, {useContext, useState} from 'react';
import {NetflixContext} from '../../context/NetflixContext';
import {BsFillPlayCircleFill, BsPlusCircle} from 'react-icons/bs';
import {TiThumbsUp} from 'react-icons/ti';
import {IoIosArrowDown} from 'react-icons/io';
import {CgCloseO} from 'react-icons/cg';
import {MdOutlineDone} from 'react-icons/md';
import Fade from 'react-reveal/Fade';

const style = {
    wrapper: `flex flex-col text-white w-[20rem] h-[27rem] bg-[#181818] fixed top-[30%] left-[10%] sm:left-[20%] md:left-[30%] lg:left-[38%] z-10 rounded`,
    imgCont: `w-full h-[15rem] flex items-center justify-center relative`,
    closeIcon: `absolute top-2 right-2 text-white text-2xl cursor-pointer`,
    iconsCont: `flex justify-between px-5 py-3`,
    itemIcons: `flex gap-2`,
    icons: `text-4xl cursor-pointer`,
    moreIcons: `rounded-full border-2 border-white p-1 text-4xl  cursor-pointer`,
    infoCont: `flex items-center justify-between text-lg font-bold px-5 `,
    yearCont: `border border-white text-sm flex items-center h-5 px-1`,
    timeCont: `text-sm `,
    hdCont: `border border-white text-[10px] flex items-center h-4 px-1`,
    titleCont: `flex flex-col items-center px-5 text-xl font-semibold mt-3`,
    genresCont: `flex text-lg text-gray-300 px-5 gap-1 mt-3`,
    myListCont: `absolute bg-white text-black text-lg font-semibold px-3 py-1 rounded bottom-0 left-5`,
    addedMovies: `absolute bg-green-500 text-white text-lg font-semibold px-3 py-1 rounded bottom-0 left-5`
}

const MovieInfo = () => {
    const [showAddList, setShowAddList] = useState(false)
    const [addedMovie, setAddedMovie] = useState(false)
    const {imageSelector, movieRating, genres, handleList, title, 
        runTime, year, genresTwo, setCloseMovie, closeMovie, 
        season, movieOrSeries} = useContext(NetflixContext);


    const timeConvert = (num) => {
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return  `${rhours} h. ${rminutes} m.`
        }
        
  return (
      <Fade>
    <div className={closeMovie ? `hidden` : style.wrapper}>
      <div className={style.imgCont}>
          <CgCloseO className={style.closeIcon} onClick={() => {
              setCloseMovie(true)
              setAddedMovie(false)
            }

          } />
          <img src={imageSelector} alt="dd" width={157} />
          {showAddList && (
              <div className={addedMovie ? style.addedMovies : style.myListCont}>{addedMovie ? 
              <div className='flex items-center gap-2'>
                  <h1>Added</h1>
                  <MdOutlineDone className='text-2xl' />
              </div> : 'Add to My List'}</div>
          )
          }
      </div>
      <div className={style.iconsCont}>
          <div className={style.itemIcons}>
              <BsFillPlayCircleFill className={style.icons} />
              <BsPlusCircle className={style.icons} 
              onClick={() => {
                handleList(imageSelector)
                setAddedMovie(true)
              }} 
              onMouseEnter={() => setShowAddList(true)}
              onMouseLeave={() => setShowAddList(false)} />
              <TiThumbsUp className={style.moreIcons} />
          </div>
          <div>
              <IoIosArrowDown className={style.moreIcons}  />
          </div>
      </div>
      <div className={style.infoCont}>
          <div className="flex gap-2">
          <p className='text-green-600'>{movieRating}</p><span>IMDB</span>
          </div>
          <div className='flex items-center gap-3'>
          <div className={style.yearCont}>{year}</div>
          {movieOrSeries ? (
              <p className={style.timeCont}>{season} {season > 1 ? 'Seasons' : 'Season'}</p>
          ) : (
            <p className={style.timeCont}>{timeConvert(runTime)} </p>
          ) }


          <p className={style.hdCont}>HD</p>
          </div>
      </div>
      <div className={style.titleCont}>
          <h1>{title}</h1>
      </div>
      <div className={style.genresCont}>
      <p>{genres}</p>
      <span>・</span>
      <p>{genresTwo}</p>
      </div>
    </div>
    </Fade>
  )
}

export default MovieInfo
