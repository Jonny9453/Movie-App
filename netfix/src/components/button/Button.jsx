import {StyledButton, Buttons} from './Button.styled'



export default function Button() {
  return (
    
      <Buttons>
        <div style={{display:"flex", gap:'2.9rem'}}>
          <StyledButton>ADD ADULTS</StyledButton>
          <StyledButton varient="outline">ADD KIDS</StyledButton>
        </div>
          <a href="a" style={{color:'white', textDecorationColor:'white', fontSize:"2rem"}}>MANAGE USERS</a>
     </Buttons>   
      
    
  )
}


