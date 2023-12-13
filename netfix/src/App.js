import ProfilePage from './Pages/ProfilePage';

import MediaHome from './Pages/MediaHome.js';
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom';
import MoviePage from './Pages/MoviePage.js';
import TVShows from './Pages/TVShows.js'
import Layout from './components/Header/Layout';
import DescriptionPage from './Pages/DescriptionPage.js';
import CategoriesPage from './Pages/Categories/CategoriesPage.js';
import HindiMoviesandShows from './Pages/Categories/HindiMoviesandShows.js';
import EnglishMoviesandShows from './Pages/Categories/EnglishMoviesandShows.js';

function App() {


  return ( 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProfilePage/>}/>
            <Route element={<Layout/>}>
              <Route path='/Home' element={<MediaHome/>}/>
              <Route path='/Movies' element={<MoviePage/>}/>
              <Route path='/TVShows' element={<TVShows/>}/>
              <Route path='/Home/:id/' element={<DescriptionPage/>}/>
              <Route path='/Categories' element={<CategoriesPage/>}>
                <Route index element={<EnglishMoviesandShows/>}/> 
                {/* this is relative path 'Hindi' to categories */}
                <Route path='Hindi' element={<HindiMoviesandShows/>}/> 
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
