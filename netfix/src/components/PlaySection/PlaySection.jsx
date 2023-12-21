import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components'

const PlaySec=styled.section`
    margin-top:4rem;
    display: flex;
    gap:3rem;
    align-items: center;
`

export default function PlaySection() {
  return (
    
       <PlaySec>
            <PlayArrowIcon  style={{color:"red", fontSize:"5rem"}}/>
            <AddIcon  style={{color:"grey", fontSize:"3rem"}}/>
            <StarIcon style={{color:"grey", fontSize:"3rem"}}/>
        </PlaySec>
    
  )
}
