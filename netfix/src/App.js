import MediaHome from './Pages/MediaHome.js';
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom';
import MoviePage from './Pages/MoviePage.js';
import Navigationbar from './components/Header/Navigationbar.js';
function App() {


  return ( 
        <BrowserRouter>
          <header>
            <Link>
                <Navigationbar/>
            </Link>
          </header>
          <Routes>
            <Route path='/Home' element={<MediaHome/>}/>
            <Route path='/Movies' element={<MoviePage/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
