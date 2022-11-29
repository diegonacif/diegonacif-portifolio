import '../../styles/App.css';

import htmlImg from '../../assets/html5-logo.png';
import cssImg from '../../assets/css3-logo.png';
import jsImg from '../../assets/js.png';
import reactImg from '../../assets/react.svg';
import sassImg from '../../assets/sass-logo-color.svg';
import styledImg from '../../assets/styled-components-logo.png';
import typescriptImg from '../../assets/typescript-logo.png';

export const Technologies = () => {
  return (
    <div className="technologies-container">
      <header className="tech-title">
        <span>&lt;</span>
        <h2>Tecnologias</h2>
        <span>&gt;</span>
      </header>
      <section className="techs-wrapper" translate="no">
        <div className="tech-card">
          <img src={htmlImg} alt="html5 logo" id="html-img" />
          <span>HTML5</span>
        </div>
        <div className="tech-card">
          <img src={cssImg} alt="css logo" id="css-img" />
          <span>CSS3</span>
        </div>
        <div className="tech-card">
          <img src={jsImg} alt="javascript logo" id="js-img" />
          <span>JavaScript</span>
        </div>
        <div className="tech-card">
          <img src={typescriptImg} alt="typescript logo" id="ts-img" />
          <span>TypeScript</span>
        </div>
        <div className="tech-card">
          <img src={reactImg} alt="react logo" id="react-img" />
          <span>React</span>
        </div>
        <div className="tech-card">
          <img src={sassImg} alt="sass logo" id="sass-img" />
          <span>Sass</span>
        </div>
        <div className="tech-card">
          <img src={styledImg} alt="styled components logo" id="styled-img" />
          <span>Styled Components</span>
        </div>
        
      </section>
    </div>
  );
};