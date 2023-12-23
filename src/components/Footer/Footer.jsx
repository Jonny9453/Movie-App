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
                <Link className='footerLink'>FAQ</Link>
                <Link className='footerLink'>Help Center</Link>
                <Link className='footerLink'>Account</Link>
                <Link className='footerLink'>Media Center</Link>
                <Link className='footerLink'>Media Center</Link>
                <Link className='footerLink'>Invester Relation</Link>
                <Link className='footerLink'>Jobs</Link>
                <Link className='footerLink'>Ways to Watch</Link>
                <Link className='footerLink'>Terms of Use</Link>
                <Link className='footerLink'>Privacy</Link>
                <Link className='footerLink'>Cookie Preferences</Link>
                <Link className='footerLink'>Corporate Information</Link>
                <Link className='footerLink'>Contact Us</Link>
                <Link className='footerLink'>Speed test</Link>
                <Link className='footerLink'>Legal Notices</Link>
                <Link className='footerLink'>MetFlix</Link>
        </FooterNavigation>
    </Footerr>
  )
}
