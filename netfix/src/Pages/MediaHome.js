import React from 'react'
import styled from 'styled-components'
import PlaySection from '../components/PlaySection/PlaySection';
import MoviesDescription from '../components/MoviesDescription/MoviesDescription';
import '../App.css'
import strangerthings from '../img/strangerthings.jpg'
import indianajones from '../img/indianajones.webp';
import VR from '../img/VR.webp'
import Loki from '../img/Loki.webp'
import {Link} from 'react-router-dom'





const Body= styled.div`
    background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.312)),url(${strangerthings});
    height: auto;
    
`
const H2= styled.h2`
    color:white;
    font-size: 2.4rem;
    font-weight: 500;

    margin-top: 4rem;
`

const List= styled.div`
    width: 14.6rem;
    height: 22.8rem;
    border-radius:1.6rem ;
    overflow: hidden;
    border: 1px solid white;
     ;
`

const Img=styled.img`
    width: 100%;
    object-fit: cover;
`

const Section=styled.section`
 margin-top:3rem ;
 display: flex;
 gap:2rem;
 flex-wrap: wrap;
 
 /* background-image: linear-gradient(to top, black 65% ,rgba(0, 0, 0, 0.312) ); */
`

// const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=931c0e4&s=Harry Potter';


const MoviesObj=[{
  poster:indianajones,
  name:"Indiana Jones And The Dial Of Destiny"
},
{
  poster:VR,
  name:"VR"
},
{
  poster:Loki,
  name:"Loki"
},

{
  poster:Loki,
  name:"Kantara"}]




export default function MediaHome() {

  const [Movies, setMovies]=React.useState([])

    

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
    }
  };
  
  
// const getMovies=async (url)=>{
//   fetch(url)
//             .then(res => res.json())
//             .then(data => setMovies(data))
            
// }


   React.useEffect(()=>{     
//     getMovies(url);
      fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        .then(response => response.json())
        .then(response => setMovies(response))
        .catch(err => console.error(err));

      console.log(Movies)
},[]);

   
    const list=[];
   if(Movies && Movies.results){
        for(let i=0; i<Movies.results.length; i++){
          list.push(<Link to={`/Home/${Movies.results[i].original_title||Movies.results[i].original_name}`}><div style={{textAlign:"center", width:"15rem"}}> <List>
            <Img src={`https://image.tmdb.org/t/p/original${Movies.results[i].poster_path}`} alt='indiana-jones-img' />
          </List><span style={{ fontSize:"1.4rem", fontWeight:"500", color:"white"}}>{Movies.results[i].original_title||Movies.results[i].original_name}</span></div></Link>)
      }
   }
      
    
   

  return (
    <Body>
    
      {/* <Navigationbar/> */}
      <main style={{paddingLeft:"5rem"}}>
        
        <MoviesDescription Title={"Stranger Things"}/>
        <PlaySection />
        <H2>Trending Movies & TV Shows</H2>
        <Section>
          {list}
        </Section>
        
      </main>

     
    </Body>
  )
}
