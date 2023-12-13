import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import CategoryIcon from '@mui/icons-material/Category';

const Sidenav= styled.div`
  
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 6rem;
  

`

const CloseButton=styled.a`

  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: red;
`




export default function SlideNav() {
  
  const closeNav=()=>{
    document.getElementById("mySlideNav").style.width = "0";
  }

  

  return (
    <Sidenav id='mySlideNav' >
       <CloseButton href="javascript:void(0)"  onClick={closeNav}>&times;</CloseButton>
       <NavLink className={({isActive})=>isActive? "activeSideLink" : "SideLink" }  to="/Home"><HomeIcon style={{fontSize:" 3rem"}}/>Home</NavLink>
       <NavLink className={({isActive})=>isActive? "activeSideLink" : "SideLink" }  to="/Movies"><LocalMoviesIcon style={{fontSize:" 3rem"}}/>Movies</NavLink>
       <NavLink className={({isActive})=>isActive? "activeSideLink" : "SideLink" }  to="/TVShows"><TvIcon style={{fontSize:" 3rem"}}/>TVShows</NavLink>
       <NavLink className={({isActive})=>isActive? "activeSideLink" : "SideLink" }  to="/Categories"><CategoryIcon style={{fontSize:" 3rem"}}/>Categories</NavLink>
    </Sidenav>
  )
}
