import '../../styles/App.css';

import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';

export const Contact = () => {
  return (
    <div className="contact-container">
      {/* <section id="left-section"> */}
        <div className="contact-title">
          <span>&lt;</span>
          <h2>Contato</h2>
          <span>&gt;</span>
        </div>
        <div className="contact-body">
          <div className="contact-text">
            Entre em contato comigo através dos links abaixo, que terei prazer em responder.
          </div>
          <div className="contact-icons" translate="no">
            <IconContext.Provider value={{ className: "global-react-icons" }}>
              <div 
                className="contact-button"
                onClick={() => window.open('https://www.linkedin.com/in/diego-nacif/')}
              >
                <FaLinkedin title="LinkedIn" />
                <span>LinkedIn</span>
              </div>

              <div 
                className="contact-button"
                onClick={() => window.open('https://github.com/diegonacif')}
              >
                <FaGithub title="Github" />
                <span>Github</span>
              </div>

              <div 
                className="contact-button"
                onClick={() => window.open('https://t.me/DiegoNacif')}
              >
                <FaTelegram title="Telegram" />
                <span>Telegram</span>
              </div>
              
              <div 
                className="contact-button"
                onClick={() => window.open('https://wa.me/5584991751476')}
              >
                <IoLogoWhatsapp title="Whatsapp" />
                <span>Whatsapp</span>
              </div>

              <div 
                className="contact-button"
                onClick={() => window.open('mailto:diegoreisnacif@gmail.com?subject="Contato LandingPage"')}
              >
                <ImMail title="Mail" />
                <span>E-mail</span>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      {/* </section> */}
    </div>
  );
};