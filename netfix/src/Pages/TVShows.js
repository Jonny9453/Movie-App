import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Img=styled.img`
    width: 100%;
    object-fit: cover;
`


const List= styled.div`
    width: 14.6rem;
    height: 22.8rem;
    border-radius:1.6rem ;
    overflow: hidden;
    border: 1px solid white;
     ;
`
const Section=styled.section`
 margin-top:3rem ;
 display: flex;
 justify-content: center;
 gap:2rem;
 flex-wrap: wrap;
 /* background-image: linear-gradient(to top, black 65% ,rgba(0, 0, 0, 0.312) ); */
`

export default function TVShows() {
  const [Shows, setShows]= React.useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
    }
  };
  React.useEffect(()=>{
    fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(response => response.json())
    .then(response => setShows(response))
    .catch(err => console.error(err));

  },[])
 

  const list=[];
  if(Shows && Shows.results){
       for(let i=0; i<Shows.results.length; i++){
         list.push(<Link to={`/Home/${Shows.results[i].original_name}`}><div style={{textAlign:"center", width:"15rem"}}> <List>
           <Img src={`https://image.tmdb.org/t/p/original${Shows.results[i].poster_path}`} alt='indiana-jones-img' />
         </List><span style={{ fontSize:"1.4rem", fontWeight:"500", color:"white"}}>{Shows.results[i].original_name}</span></div></Link>)
     }
  }

  console.log(list)
  return (
    
    <Section>
      {list}
    </Section>
    
  )
}
