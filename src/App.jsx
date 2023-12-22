import ProfilePage from './Pages/ProfilePage';

import MediaHome from './Pages/MediaHome.jsx';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import MoviePage from './Pages/MoviePage.jsx';
import TVShows from './Pages/TVShows.jsx'
import Layout from './components/Header/Layout';
import DescriptionPage from './Pages/DescriptionPage.jsx';
import CategoriesPage from './Pages/Categories/CategoriesPage.jsx';
import HindiMoviesandShows from './Pages/Categories/HindiMoviesandShows.jsx';
import TopRated from './Pages/Categories/TopRated.jsx';
import Popular from './Pages/Categories/Popular.jsx'
import ErrorPage from './Pages/ErrorPage.jsx';

function App() {
  

  return ( 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProfilePage/>}/>
            <Route element={<Layout/>}>
              <Route path='/Home' element={<MediaHome/>}/>
              <Route path='/Movies' element={<MoviePage/>}/>
              <Route path='/TVShows' element={<TVShows/>}/>
              <Route path='/Home/:id' element={<DescriptionPage/>}>
                <Route index element={<TopRated varient="nowrap"/>}/>
                <Route path='popular' element={<Popular varient="nowrap"/>}/>
              </Route>
              <Route path='/Categories' element={<CategoriesPage/>}>
                <Route index element={<TopRated varient="wrap" />}/> 
                <Route path='/Categories/:id'  element={<DescriptionPage/>}>
                  <Route index element={<TopRated varient="nowrap"/>}/>
                  <Route path='popular' element={<Popular varient="nowrap"/>}/>
                </Route>  
                
                
                {/* this is relative path 'Hindi' to categories */}
                <Route path='Hindi' element={<HindiMoviesandShows/>}/> 
              </Route>
              <Route path="*" element={<ErrorPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
