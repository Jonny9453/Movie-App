import { Profile } from '../components/Profile';
import Button from '../components/button/Button';
import{Link} from 'react-router-dom'


// const anchorTo=()=>{
//   const profile=document.getElementById('profile2');
//   profile.setAttribute("href","https://mui.com/material-ui/material-icons/?query=barcode")
// }

export default function ProfilePage() {

    const ProfileArray=[]
        for(let i=0; i<4; i++){
        ProfileArray.push(<Link  to='/Home'><Profile /></Link>)
    }

  return (
    
    <main className="App">
      <p>streami</p>
      <h1 >Who's Watching</h1>
      <section className='Profiles'>
       {ProfileArray}
      </section>
      <Button/>
      
    </main>
    
  )
}
