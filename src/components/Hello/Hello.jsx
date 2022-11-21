import sofiArt from '../../assets/sofiasArt-removebg.png';
import reactLogo from '../../assets/react-logo.png';
import jsLogo from '../../assets/js-round-logo.png';
import htmlLogo from '../../assets/html5-logo.png';
import cssLogo from '../../assets/css3-logo.png';
import sassLogo from '../../assets/sass-logo.png';
import gitLogo from '../../assets/github-logo.svg';

import '../../styles/App.css';

export const Hello = () => {
  const cvUrl = 'https://drive.google.com/file/d/1oH0SgksL8lIz5LlPOAkbb335StbjRR1C/view?usp=share_link';
  const githubUrl = 'https://github.com/diegonacif';

  return (
    <div className="hello-container">
      <div className="hello-text">
        <span>Olá, meu nome é</span>
        <div className="my-name">
          <h2>Diego&nbsp;</h2>
          <h2>Nacif</h2>
        </div>
        <span>Desenvolvedor <b>Front-End</b></span>
        <div className="buttons">
          <button onClick={() => window.open(cvUrl)}>DOWNLOAD CV</button>
          <button onClick={() => window.open(githubUrl)}>GITHUB</button>
        </div>
      </div>
      <div className="art-wp">
        <div id="blob-bg">
          <img src={sofiArt} alt="Diego by Sofia" id="chibi-img" />
          <div className="react-bg">
            <img src={reactLogo} alt="react logo" id="react-logo" />
          </div>
          <div className="css-bg">
            <img src={cssLogo} alt="css logo" />
          </div>
          <div className="js-bg">
            <img src={jsLogo} alt="javascript logo" />
          </div>
          <div className="html-bg">
            <img src={htmlLogo} alt="javascript logo" />
          </div>
          <div className="sass-bg">
            <img src={sassLogo} alt="sass logo" />
          </div>
          <div className="github-bg">
            <img src={gitLogo} alt="github logo" />
          </div>
          
        </div>
      </div>
    </div>
  )
}