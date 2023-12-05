import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {Navbar, Div, Input} from './Navbar.styled';
import {Link} from 'react-router-dom'


export default function Navigationbar() {
  return (
    
       <header style={{padding:"5rem"}}>
        <Navbar>
            <Div>
                <MenuOpenIcon  style={{fontSize:"3rem"}}/>
                <Link to='/Movies' className='Link'>Movies</Link>
                <a>TV SHOWS</a>
            </Div>
            <Div>
                <Input type="search"/>
                <div style={{backgroundColor:'red', width:'3.6rem', height:'3.6rem', borderRadius:'50%'}}></div>
                <a>Jenny</a>
            </Div>    
        </Navbar>
      </header>
    
  )
}
