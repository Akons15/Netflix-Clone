import {createContext, useState, useEffect} from 'react';
import {
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut} from 'firebase/auth';
import { auth } from '../config/firebase';
import axios from 'axios';

export const NetflixContext = createContext();


export const NetflixProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [trendingMovie, setTrendingMovie] = useState([]);
    const [userName, setUserName] = useState('');
    const [imageSelector, setImageSelector] = useState('');
    const [movieRating, setMovieRating] = useState('');
    const [genresData, setGenresData] = useState();
    const [genres, setGenres] = useState();
    const [genresTwo, setGenresTwo] = useState();
    const [title, setTitle] = useState();
    const [season, setSeason] = useState();
    const [runTime, setRunTime] = useState();
    const [year, setYear] = useState();
    const [closeMovie, setCloseMovie] = useState(true);
    const [myList, setMyList] = useState([]);
    const [movieOrSeries, setMovieOrSeries] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [mobileMenue, setMobileMenue] = useState(false);
    
   
    
   useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/basic',
        params: {
          country: 'us',
          service: 'netflix',
          type: 'movie',
          genre: '18',
          page: '4',
          output_language: 'en',
          language: 'en'
        },
        headers: {
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            'X-RapidAPI-Key': 'aab5e2950amsh3f496dfd596382bp1810f7jsn673346ec7d59',
        }
      };
      
      axios.request(options).then(function (response) {
        setMovie(response.data.results);
      }).catch(function (error) {
          console.error(error);
      });
   },[])



   useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/basic',
        params: {
          country: 'us',
          service: 'netflix',
          type: 'series',
          genre: '18',
          page: '1',
          output_language: 'en',
          language: 'en'
        },
        headers: {
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            'X-RapidAPI-Key': 'aab5e2950amsh3f496dfd596382bp1810f7jsn673346ec7d59',
        }
      };
      
      axios.request(options).then(function (response) {
        setTrendingMovie(response.data.results);
      }).catch(function (error) {
          console.error(error);
      });
   },[])

   useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/genres',
        headers: {
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            'X-RapidAPI-Key': 'aab5e2950amsh3f496dfd596382bp1810f7jsn673346ec7d59',
        }
      };
      
      axios.request(options).then(function (response) {
        setGenresData(response.data)
      }).catch(function (error) {
          console.error(error);
      });
   },[])

   
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if(user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
                setUserName(user.email.split('@')[0])
                console.log(userName)
                
            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return unsubscribe()
    }, [])

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        setUser(null)
        await signOut(auth)
    }

    const handleList = movies => {
        if(myList.indexOf(movies) !== -1) return;
        setMyList([...myList, movies])
    }

    

    return (
        <NetflixContext.Provider value={{
            signUp,
            logIn,
            logOut,
            user,
            movie,
            userName,
            setImageSelector,
            imageSelector,
            setMovieRating,
            movieRating,
            genresData,
            setGenres,
            genres,
            setTitle,
            title,
            setRunTime,
            runTime,
            setYear,
            year,
            setGenresTwo,
            genresTwo,
            setCloseMovie,
            closeMovie,
            trendingMovie,
            handleList,
            myList,
            setSeason,
            season,
            setMovieOrSeries,
            movieOrSeries,
            setDropDown,
            dropDown,
            setMobileMenue,
            mobileMenue,

        }} >
            {loading ? null : children}
        </NetflixContext.Provider>
    )
}