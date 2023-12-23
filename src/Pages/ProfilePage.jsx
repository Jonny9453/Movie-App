import { Profile } from '../components/Profile';
import Button from '../components/button/Button';
import{Link} from 'react-router-dom'
import './profile.css'

// const anchorTo=()=>{
//   const profile=document.getElementById('profile2');
//   profile.setAttribute("href","https://mui.com/material-ui/material-icons/?query=barcode")
// }



export default function ProfilePage() {
  const names = ['Jenny', 'Mayank', 'kriti', 'Add Profile'];
    const ProfileArray=[]
        for(let i=0; i<4; i++){
        ProfileArray.push(<Link  to='/Home'><Profile background={i} /><span style={{fontSize:"3rem", color:"white", fontWeight:"500"}}>{names[i]}</span></Link>)
    }

  return (
    
    <main className="App">
      <p className='streami'>streami</p>
      <h1 className='heading'>Who's Watching</h1>
      <section className='Profiles'>
       {ProfileArray}
      </section>
      <Button/>
     
      
    </main>
    
  )
}
