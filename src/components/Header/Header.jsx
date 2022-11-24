import { Link } from 'react-router-dom';
import { useBreakpoint } from '../../hooks/useBreakpoint';

import '../../styles/App.css';
import { MenuButton } from '../MenuButton/MenuButton';

export const Header = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className="header-container">
      <Link to="/">
        <div className="myName">
          <span>&lt;</span>
          <h1>Diego Nacif</h1>
          <span>&gt;</span>
        </div>
      </Link>

      {
        breakpoint === 'notebook' || breakpoint === 'desktop' ?
        <div className="menus">
          <Link to="/about-me">Sobre mim</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/technologies">Tecnologias</Link>
          <Link to="/contact">Contato</Link>
        </div> :
        <MenuButton />
      }
    </div>
  )
}