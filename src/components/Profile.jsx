import styled from 'styled-components'
import girl from '../img/girl.jpg'
import boy from '../img/boy.jpg'
import girl2 from '../img/girl2.jpg'
import profile from '../img/profile.jpg'

export const Profile=styled.div`
    width: 20.5rem;
    height: 20.5rem; 
    background-color: #EF4145;
    border-radius: 50%;
    background-image: ${(props) => (props.background === 0 ? `url(${girl})` : props.background === 1 ? `url(${boy})` : props.background === 2 ? `url(${girl2})`:`url(${profile})`)};

    background-size: cover;
   
     
    @media (max-width:500px) {
        width:15rem;
        height: 15rem;
    } 
`