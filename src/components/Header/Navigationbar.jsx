import React from 'react'

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import {Navbar, Div, Input} from './Navbar.styled';
import {NavLink,Link} from 'react-router-dom';
import SlideNav from '../SlideNavigation/slideNav';
import styled from 'styled-components';

const SearchedBox=styled.div`
  color:white;
  height: 0;
  position: absolute;
  background-color: #111;
  width:30rem;
  transition: opacity 0.3s ease-in-out, height 1s ease-in-out;
  border-radius: 1rem;
  overflow-y: scroll;
`

const openNav=()=>{
    document.getElementById('mySlideNav').style.width="25rem";
}






export default function Navigationbar() {
  const[searchItem,setSearchItem]= React.useState()
  const [loadUrl,setLoadUrl]=React.useState(false)
  const [array,setArray]=React.useState([])
  
  const closedropdown=()=>{
    document.getElementById('searchedBox').style.height='0'
    
  }

  document.body.addEventListener('click',closedropdown)
  const options = React.useMemo(()=>{
    return {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
      }
    };
  },[])

  const url=`https://api.themoviedb.org/3/search/multi?query=${searchItem}&include_adult=false&language=en-US&page=1`;

  React.useEffect(()=>{     
          if(!loadUrl) return;
          fetch(url, options)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              console.log("mayabk")
              document.getElementById('searchedBox').style.height='45rem'
              if(data.results.length!==0){
                setArray(data.results)
              }else{
                setArray([{message:"Movies and TV Shows not Found"}])
              }
              
              
            })
            .catch(err => console.error(err));

            setLoadUrl(false);
  },[loadUrl,url,options]);

  

    React.useEffect(()=>{
      console.log(array)
    },[array])

  const searchMovie=()=>{
    const searchMovie=document.getElementById('searchMovie');
    setSearchItem(searchMovie.value)
    

    setLoadUrl(searchMovie.value)
    
    
  }

 



  return (
    <>
      <header style={{padding:"5rem"}}>
      <SlideNav/>
        <Navbar>
            <Div>
                <MenuOpenIcon  style={{fontSize:"3rem"}} onClick={openNav}/>
                <NavLink className={({isActive})=>isActive? "activeLink" : "Link" }  to='/Home'>Home</NavLink>
                <NavLink className={({isActive})=>isActive? "activeLink" : "Link"} to='/Movies'>Movies</NavLink>
                <NavLink className={({isActive})=>isActive? "activeLink" : "Link" } to='/TVShows'>TV SHOWS</NavLink>
            </Div>
            <Div>
              <div style={{position:"relative"}} >
                <Input id='searchMovie' type="search" onClick={searchMovie} onChange={searchMovie} />
                <button onClick={searchMovie} style={{color:"white" ,backgroundColor:"transparent", border:"none", scale:"1.6", position:"absolute", top:"1rem", right:"1rem"}}><SearchIcon/></button>
                <SearchedBox id="searchedBox">
                      {
                        array.length === 0?
                        (<span></span>):(array.map((arr)=>{
                          return (<Link class="Link" to={`/home/${arr.original_title}` } onClick={closedropdown} ><div style={{borderTop:"1px transparent solid", borderBottom:"1px #818181 solid", padding:"1rem", display:"flex", alignItems:"center", gap:"2rem"}} ><img src={`https://image.tmdb.org/t/p/original${arr.poster_path}`} alt='img' style={{height:"10rem"}}/>{arr.original_title||arr.original_name||arr.message}</div></Link>)
                        }))
                      }
                </SearchedBox>
              </div>
                
                <div style={{backgroundColor:'red', width:'3.6rem', height:'3.6rem', borderRadius:'50%'}}></div>
                <Link to=''>Jenny</Link>
            </Div>    
        </Navbar>
        
      </header>
      
    </>
  )
}
