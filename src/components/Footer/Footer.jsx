import styled from 'styled-components'

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
                <a>FAQ</a>
                <a>Help Center</a>
                <a>Account</a>
                <a>Media Center</a>
                <a>Invester Relation</a>
                <a>Jobs</a>
                <a>Ways to Watch</a>
                <a>Terms of Use</a>
                <a>Privacy</a>
                <a>Cookie Preferences</a>
                <a>Corporate Information</a>
                <a>Contact Us</a>
                <a>Speed test</a>
                <a>Legal Notices</a>
                <a>MetFlix</a>
        </FooterNavigation>
    </Footerr>
  )
}
