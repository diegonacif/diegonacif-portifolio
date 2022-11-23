import '../../styles/App.css';
import { ProjectsCards } from '../ProjectsCards/ProjectsCards';
import attoImg from '../../assets/projectsImg/atto-rpg-print.png';
import diegoPortImg from '../../assets/projectsImg/diego-porti-print.png';
import fogueiraImg from '../../assets/projectsImg/fogueira-print.png';
import nlwImpulseImg from '../../assets/projectsImg/nlw-impulse-print.png';
import igniteFeedImg from '../../assets/projectsImg/ignite-feed-print.png';
import totalInkImg from '../../assets/projectsImg/total-ink-project-print.png';


// Repos (1, 6, 7, 13, 17)

export const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <span>&lt;</span>
        <h2>Projetos</h2>
        <span>&gt;</span>
      </div>
      <div className="cards-wrapper">
        <ProjectsCards 
          repoId='1' 
          imgSrc={attoImg}
        />
        <ProjectsCards 
          repoId='6'
          imgSrc={diegoPortImg}
        />
        <ProjectsCards 
          repoId='7'
          imgSrc={fogueiraImg}
        />
        <ProjectsCards 
          repoId='22'
          imgSrc={nlwImpulseImg}
        />
        <ProjectsCards 
          repoId='15'
          imgSrc={igniteFeedImg}
        />
        <ProjectsCards 
          repoId='34'
          imgSrc={totalInkImg}
        />
      </div>
    </div>
  );
};