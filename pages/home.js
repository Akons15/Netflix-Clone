import React, {useState, useContext} from 'react';
import Dropdown from '../components/main/Dropdown';
import Nav from '../components/main/Nav';
import MainMovie from '../components/main/MainMovie';
import Movies from '../components/main/Movies';
import MovieInfo from '../components/main/MovieInfo';
import MobileMenue from '../components/main/MobileMenue';
import { NetflixContext } from '../context/NetflixContext';

const style = {
    wrapper: `w-full h-screen relative `,
}

const Home = () => {
    const {closeMovie, dropDown, setDropDown, mobileMenue} = useContext(NetflixContext);
  return (
    <div className={style.wrapper}>
      <div>
      <Nav  />
      </div>
      <div className={closeMovie ? '' : `opacity-50 `}>
      {dropDown && (
          <Dropdown setDropDown={setDropDown} />
      )}
      {mobileMenue && (
          <MobileMenue />
      )}
      <MainMovie />
      <Movies  />
      </div>
      
      <MovieInfo  />
      
    </div>
  )
}

export default Home
