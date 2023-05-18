import './Footer.css';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <h2>Desenvolvido por Alura.</h2>
                <div className="footer__buttons">
                    <a href="http://facebook.com/alura"><BsFacebook size="30" /></a>
                    <a href="http://twitter.com/alura"><BsTwitter size="30" /></a>
                    <a href="http://instagram.com/alura"><BsInstagram size="30" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
