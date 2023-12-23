import React from 'react'
import {Link, useOutletContext} from 'react-router-dom'
import styled from 'styled-components'
import './styleAnimation.css'
import  PropTypes  from 'prop-types'


const List= styled.div`
   width: 14.6rem;
   height: 22.8rem;
   border-radius:1.6rem ;
   overflow: hidden;
   border: 1px solid white;
    
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


`


TopRated.propTypes = {
  varient: PropTypes.string
};

export default function TopRated(props) {


  

  const name=useOutletContext();
  console.log(name)

  const[data, setdata]=React.useState([])

 
  const options = React.useMemo(()=>{
    return {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE1NTcwOTBhMzZjNTRlM2NhNzNlZjljMTNjY2ZkOSIsInN1YiI6IjY0NDEyODY5YjNmNmY1MDQ5YzlkNjBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUjHWbQEg4GYMZfnoJgnJXWUKDU6oSg2OwHWaczQuGY'
      }
    }
  },[]);
  React.useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => setdata(data.results))
    .catch(err => console.error(err));
  },[options])

  const list=[];
  
  list.shift()
  
  if(data.length!==0){
  
       for(let i=0; i<data.length; i++){
        
         list.push(<Link to={`/Categories/${data[i].original_title||data[i].original_name}`} style={(name===data[i].original_title||data[i].original_name)? {borderColor:"red", scale:"1.2",transition:"1s"}:{borderColor:"white"}}><div style={{textAlign:"center", width:"15rem"}}> <List>
           <Img src={`https://image.tmdb.org/t/p/original${data[i].poster_path}` } alt='indiana-jones-img' />
         </List><span style={{ fontSize:"1.4rem", fontWeight:"500", color:"white"}}>{data[i].original_title||data[i].original_name}</span></div></Link>)
     }
  }
  
  return (
    <>
      
      <Section varient={props.varient} className={props.varient==='wrap'?null : "animation"} >
      {
        data.length===0?(<h1>Loading...</h1>):(list)

      }
   
    </Section>
    
    </>
    
    
  )
}
