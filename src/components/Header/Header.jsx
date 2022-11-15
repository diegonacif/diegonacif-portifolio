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
        breakpoint === 'laptop' || breakpoint === 'desktop' ?
        <div className="menus">
          <Link to="/about-me">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/contact">Contact</Link>
        </div> :
        <MenuButton />
      }
    </div>
  )
}