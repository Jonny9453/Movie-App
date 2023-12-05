import styled from 'styled-components'

export const StyledButton=styled.button`
  width:18.8rem;
  height: 4.7rem;
  border:${(props)=>props.varient==='outline'? '1px solid white':'none'};
  border-radius: 1.3rem;
  background-color:${(props)=>props.varient==='outline'? '#191C52' : '#737586'} ;
  color:white;
  font-size: 1.6rem;
  font-weight: bold;
  &:hover{
    background-color:${(props)=>props.varient==='outline'? 'black' : '#191C52'}; 
    border:${(props)=>props.varient==='outline'? '1px solid white':'1px solid white'};
    cursor: pointer;
  }
`

export const Buttons=styled.section`
        display: flex;
        flex-direction: column;
        gap:3.3rem;
        position: absolute;
        bottom: 7rem;
        left: 50%;
        transform: translateX(-50%);

`