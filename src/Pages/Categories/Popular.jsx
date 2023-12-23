import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import './styleAnimation.css'
import PropTypes from 'prop-types';


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
 flex-wrap: ${(props)=>props.varient==='wrap'? 'wrap':'nowrap'};
 justify-content: center;
 
 
 /* background-image: linear-gradient(to top, black 65% ,rgba(0, 0, 0, 0.312) ); */
`
Popular.propTypes = {
  varient: PropTypes.string
};
export default function Popular(props) {

    const [Movies, setMovies]=React.useState([])

    

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
      }
    };

    React.useEffect(()=>{     
        //     getMovies(url);
              fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
                .then(response => response.json())
                .then(response => setMovies(response))
                .catch(err => console.error(err));
        
              console.log(Movies)
        },[]);
        


    const list=[];
    if(Movies && Movies.results){
         for(let i=0; i<Movies.results.length; i++){
           list.push(<Link to={`/Categories/${Movies.results[i].original_title||Movies.results[i].original_name}`}><div style={{textAlign:"center", width:"15rem"}}> <List>
             <Img src={`https://image.tmdb.org/t/p/original${Movies.results[i].poster_path}`} alt='indiana-jones-img' />
           </List><span style={{ fontSize:"1.4rem", fontWeight:"500", color:"white"}}>{Movies.results[i].original_title||Movies.results[i].original_name}</span></div></Link>)
       }
    }


  return (
    <div>
      
      <Section className={props.varient==='wrap'?null : "animation"} varient={props.varient}>
        {list}
      </Section>
    </div>
  )
}
