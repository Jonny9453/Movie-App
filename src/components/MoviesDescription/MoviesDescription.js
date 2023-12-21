import styled from 'styled-components';

const H1= styled.h1`
    font-size: 3.6rem;
    color:white;
    font-weight:700;
    padding: 5rem 0 4rem 0;
`
const P= styled.p`
    font-size: 1.6rem;
    color:white;
    font-weight:500;
    
`
const Span= styled.span`
 color: grey;
 font-size: 1.6rem;
`
export default function MoviesDescription(props) {
  return (
    <div>
      <H1>{props.Title}</H1>
        <div><Span>{props.ReleasedDate}</Span><Span>|</Span><Span>U/A 16+</Span><Span>|</Span><Span>4 seasons</Span><Span>|</Span><Span>Sci-Fi</Span></div>
        <div style={{width:"50%"}}>
            <P style={{marginBottom:"4rem"}}>{props.overview}</P>
            <P><Span style={{color:"grey"}}>Starring: </Span>Winona Ryder,David Harbour,Millie Bobby Brown</P>
            <P><Span style={{color:"grey"}}>Creater: </Span>The Duffer Brothers</P>
        </div>
    </div>
  )
}
