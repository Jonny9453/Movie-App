import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Box=styled.div`
  font-size:3.8rem;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:2rem;
`
const Button=styled.button`
  background-color:#E50913;
  font-size: 2rem;
  padding: 2rem 8rem;
  border-radius: .5rem;
  border: none;
  color: white;
`
export default function ErrorPage() {
  return (
    <Box>
      Sorry the page you are looking for not found
      <Link to="home"><Button>Return to Home</Button></Link>
    </Box>
  )
}
