import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutside'; // Outside Click (Hook)
import { useTransition, animated } from '@react-spring/web'; // Conditional Rendering Transition Lib
import { Twirl as Hamburguer } from 'hamburger-react';  // Hamburguer Menu Button with Animation
import { UserList, Briefcase, Code, PhoneCall } from 'phosphor-react';

import '../../styles/App.css';

export const MenuButton = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

  // Modal Animation
  const transitions = useTransition(isMenuOpen, {
    from: { x: 10, y: -10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 10, y: -10, opacity: 0 },
    config: {duration: 200},
  });

  return (
    <div 
      className="menu-button-container"
      ref={refContainer} // Outside Click (Reference)
    >
      <Hamburguer 
        toggled={isMenuOpen} 
        toggle={handleMenuOpen}
        size={30}
        duration={0.3}
        rounded
        label="abrir menu"
      />

      {
        transitions(
          (styles, item) => item &&
            <animated.section 
              className="menu-modal" 
              style={styles} 
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="menu-item">
                <Link to="/about-me">
                  <UserList size={30} color="#dadada" weight="duotone" />
                  <span>Sobre</span>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/projects">
                <Briefcase size={30} color="#dadada" weight="duotone" />
                <span>Projetos</span>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/technologies">
                  <Code size={30} color="#dadada" weight="duotone" />
                  <span>Tecnologias</span>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/contact">
                  <PhoneCall size={30} color="#dadada" weight="duotone" />
                  <span>Contato</span>
                </Link>
              </div>
            </animated.section>
        )
      }
    </div>
  )
}