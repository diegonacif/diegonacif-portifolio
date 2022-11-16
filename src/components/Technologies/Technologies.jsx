import '../../styles/App.css';

import htmlImg from '../../assets/html5.png';
import cssImg from '../../assets/css3.png';
import jsImg from '../../assets/js.png';

export const Technologies = () => {
  return (
    <div className="technologies-container">
      <header className="tech-title">
        <span>&lt;</span>
        <h2>Tecnologias</h2>
        <span>&gt;</span>
      </header>
      <section className="techs-wrapper">
        <div className="tech-card">
          <img src={htmlImg} alt="html5 logo" />
          <span>HTML5</span>
        </div>
        <div className="tech-card">
          <img src={cssImg} alt="html5 logo" />
          <span>CSS3</span>
        </div>
        <div className="tech-card">
          <img src={jsImg} alt="html5 logo" id="js-img" />
          <span>JavaScript</span>
        </div>
      </section>
    </div>
  );
};