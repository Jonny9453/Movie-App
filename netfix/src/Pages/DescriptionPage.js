import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components'
import PlaySection from '../components/PlaySection/PlaySection';
import MoviesDescription from '../components/MoviesDescription/MoviesDescription';


 


const fetch = require('node-fetch');



// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));




export default function DescriptionPage() {
    const params=useParams();
    const [Movies, setMovies]=React.useState([])
    const Body= styled.div`
    height: 70rem;
    
`
    console.log(Movies)
    console.log(params.id)
    // const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=931c0e41&';

    const url = `https://api.themoviedb.org/3/search/multi?query=${params.id}&include_adult=false&language=en-US&page=1`;
    
    
    const options=React.useMemo(()=>{
      return {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
        }
        }
    },[])


    async function getmovie(url,options) {
      try{
        let res = await fetch(url,options);
        let data = await res.json();
        console.log(data)
        setMovies(data)
        console.log(data)
      }catch(error){
          console.log("Failed")
      }
       
      
    }
    React.useEffect(() => {
        getmovie(url,options)
        // getmovie(`${url}s=${params.id}`)
        // fetch(`${url}s=${params.id}`)
        //     .then(res => res.json())
        //     .then(data => setMovies(data))
    }, [url,options])
    
    
  return (
    <div>

<Body >
    
    {/* <Navigationbar/> */}
    
      {Movies.length === 0 ?(
        <p style={{color:"white"}}>Loading...</p>
      ): Movies.results.length!==0?(
        
        <main style={{paddingLeft:"5rem", display:"flex"}}>
        <div>
        <MoviesDescription  Title={Movies.results[0].original_title||Movies.results[0].original_name} overview={Movies.results[0].overview} ReleasedDate={Movies.results[0].release_date} Rating={Movies.results[0].vote_average}/>
        <PlaySection />
        </div>
        <div style={{height:"70rem"}}>
          <img style={{height:"100%"}} src={`https://image.tmdb.org/t/p/original${Movies.results[0].poster_path}`} alt={`-img`}/>
        </div>
        </main>
      ):(
        <p style={{color:"white"}}>Searched Movie not found</p>
      )}
      
      
   

   
  </Body>
    </div>
  )
}
