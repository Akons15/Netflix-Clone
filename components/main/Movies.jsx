import React, {useContext} from 'react'
import { NetflixContext } from '../../context/NetflixContext';
import {useRouter} from 'next/router';
import Carousel from "react-elastic-carousel";


const style = {
    wrapper: `flex flex-col gap-10 pl-10 w-full h-full bg-[#141414]`,
    movieCont: `flex flex-col text-white text-2xl font-semibold`,
    movies: `flex gap-10 p-5 `,
    movieImages: `rounded cursor-pointer py-10 hover:scale-110 duration-700`,
    
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
];



const Movies = () => {
    const {movie, trendingMovie, setImageSelector, setMovieRating, 
      genresData, setGenres, setTitle, setRunTime, 
      setYear, setGenresTwo, setCloseMovie, setSeason, setMovieOrSeries} = useContext(NetflixContext);
    const router = useRouter();


  return (
    <div className={style.wrapper}>
      <div className={style.movieCont}>
      <h1>Movies on Netflix</h1>
          <div className={style.movies}>   
            <Carousel  breakPoints={breakPoints}>
            {movie?.map((item, index) => (
                <img
              className={style.movieImages}
              key={index}
              onClick={() => {
                setImageSelector(item.posterURLs.original)
                setMovieRating(item.imdbRating.toString().split('').join('.'))
                setGenres(genresData[item.genres[0]])
                setGenresTwo(genresData[item.genres[1]])
                setTitle(item.title)
                setRunTime(item.runtime)
                setYear(item.year)
                setCloseMovie(false)
                setMovieOrSeries(false)
                }
                }
              src={item.posterURLs.original}
              width={200}
              height={100} />
            ))}
            </Carousel>
          </div>
      </div>


      <div className={style.movieCont}>
      <h1>Series on Netflix</h1>
          <div className={style.movies}>
            <Carousel breakPoints={breakPoints} >
            {trendingMovie?.map((item, index) => (
                <img
              className={style.movieImages}
              key={index}
              onClick={() => {
                setImageSelector(item.posterURLs.original)
                setMovieRating(item.imdbRating.toString().split('').join('.'))
                setGenres(genresData[item.genres[0]])
                setGenresTwo(genresData[item.genres[1]])
                console.log(item.genres[0])
                setTitle(item.title)
                setSeason(item.seasons)
                setYear(item.year)
                setCloseMovie(false)
                setMovieOrSeries(true)
                }
                }
              src={item.posterURLs.original}
              width={200}
              height={120} />
            ))}
            </Carousel>
          </div>
      </div>
    </div>
  )
}

export default Movies
