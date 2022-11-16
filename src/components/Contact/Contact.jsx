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
          <div className="contact-icons">
            <IconContext.Provider value={{ className: "global-react-icons" }}>
              <FaLinkedin 
                onClick={() => window.open('https://www.linkedin.com/in/diego-nacif/')}
                title="LinkedIn"
              />
              <FaGithub 
                onClick={() => window.open('https://github.com/diegonacif')} 
                title="Github" 
              />
              <FaTelegram
                onClick={() => window.open('https://t.me/DiegoNacif')}
                title="Telegram"
              />
              <IoLogoWhatsapp 
                onClick={() => window.open('https://wa.me/5584991751476')}
                title="Whatsapp"
              />
              <ImMail 
                onClick={() => window.open('mailto:diegoreisnacif@gmail.com?subject="Contato LandingPage"')}
                title="Mail"
              />
            </IconContext.Provider>
          </div>
        </div>
      {/* </section> */}
    </div>
  );
};