import React from 'react'
import styled from 'styled-components'
import PlaySection from '../components/PlaySection/PlaySection';
import MoviesDescription from '../components/MoviesDescription/MoviesDescription';
import '../App.css'
import strangerthings from '../img/strangerthings.jpg'
import indianajones from '../img/indianajones.webp';
import VR from '../img/VR.webp'
import Loki from '../img/Loki.webp'



const Body= styled.div`
    background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.312)),url(${strangerthings});
    height: 70rem;
    
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



export default function MediaHome() {

    const list=[];
    const img=[indianajones,VR, Loki]
    for(let i=0; i<3; i++){
        list.push(<div style={{textAlign:"center"}}><List>
            <Img src={img[i]} alt='indiana-jones-img'/>
        </List><span style={{ fontSize:"1.4rem", fontWeight:"500", color:"white"}}>indianajones</span></div>)
    }

  return (
    <Body>
    
      {/* <Navigationbar/> */}
      <main style={{paddingLeft:"5rem"}}>
        
        <MoviesDescription />
        <PlaySection />
        <H2>Your Fovourite Movies</H2>
        <Section>
            {list}
        </Section>
        
      </main>

     
    </Body>
  )
}
