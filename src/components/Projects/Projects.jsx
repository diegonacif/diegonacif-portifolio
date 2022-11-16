import '../../styles/App.css';
import { ProjectsCards } from '../ProjectsCards/ProjectsCards';

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
        <ProjectsCards repoId='1'/>
        <ProjectsCards repoId='6'/>
        <ProjectsCards repoId='7'/>
        <ProjectsCards repoId='13'/>
        <ProjectsCards repoId='17'/>
      </div>
    </div>
  );
};