import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Footerr=styled.footer`
   margin: 5rem;
    
`

const Contact= styled.section`
    color:#4A4A4A;
    font-weight: 600;
    font-size: 1.5rem ;
    position: relative;
    top: 0;
    margin-bottom: 2.9rem;
`
const FooterNavigation=styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-auto-flow: row;
    grid-gap:1rem;
    color:#4A4A4A;
    font-weight: 600;
    font-size: 1.5rem ;
`

export default function Footer() {
  return (
    <Footerr>
        {/* Contact US */}
        <Contact className="contact">
            <p>Questions? Call 000-800-919-1694</p>
        </Contact>
        <FooterNavigation clssName="footer-Navigation">
                <Link>FAQ</Link>
                <Link>Help Center</Link>
                <Link>Account</Link>
                <Link>Media Center</Link>
                <Link>Invester Relation</Link>
                <Link>Jobs</Link>
                <Link>Ways to Watch</Link>
                <Link>Terms of Use</Link>
                <Link>Privacy</Link>
                <Link>Cookie Preferences</Link>
                <Link>Corporate Information</Link>
                <Link>Contact Us</Link>
                <Link>Speed test</Link>
                <Link>Legal Notices</Link>
                <Link>MetFlix</Link>
        </FooterNavigation>
    </Footerr>
  )
}
