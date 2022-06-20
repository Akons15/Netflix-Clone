import '../styles/globals.css'
import {NetflixProvider} from '../context/NetflixContext';

function MyApp({ Component, pageProps }) {
  return (
    <NetflixProvider>
      <Component {...pageProps} />
    </NetflixProvider>
  ) 
}

export default MyApp
