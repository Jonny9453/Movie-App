import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import styled from 'styled-components'
export default function CategoriesPage() {
 
  const [image, setimage]= React.useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setimage(response.results[1].backdrop_path))
    .catch(err => console.error(err));

  const activeStyles={
    color:"red",

  }

  const nonactivestyles={
    color:"white"
  } 

  const Box= styled.div`
    width: 30rem;
    height: 15rem;
    display: flex;
    justify-content: center; /* Horizontal centering */
    align-items: center; /* Vertical centering */
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.312), rgba(0, 0, 0, 0.312)), url(${`https://image.tmdb.org/t/p/original${image}`});
    background-size:cover;
    border-radius:1rem;
    border: 1px solid white;
    font-size:2rem;
    font-weight:bold;
  `

  const Navigation =styled.nav`
      display: flex;
      justify-content: center;
      gap:2rem;
      @media (max-width:480px){
        flex-direction: column;
        align-items: center;
      }
     
  `
  return (
    <>
      <Navigation>

        <NavLink to="." end style={({isActive})=>isActive? activeStyles: nonactivestyles} ><Box >TopRated</Box></NavLink>
        <NavLink to="Hindi" end style={({isActive})=>isActive? activeStyles: nonactivestyles}><Box>Hindi</Box></NavLink>
      </Navigation>
      <Outlet  />
    </>
  )
}
