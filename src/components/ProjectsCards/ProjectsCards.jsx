import {useState, useEffect} from "react";
import api from '../../services/api';

import '../../styles/App.css';

export const ProjectsCards = ({ repoId, imgSrc }) => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function getRepository() {
      await api
        .get(`/repos?per_page=100`)
        .then((response) => setRepo(response.data[repoId]))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      }      
      getRepository();
    }, [repoId]);
    
    // console.log(repo);

    return (
      <div className="projects-cards-container">
        <div className="img-wrapper">
          <img src={imgSrc} alt="#" />
        </div>
        <span translate="no">{repo.name}</span>
        <span>{repo.description}</span>
        <div className="buttons">
          <button onClick={() => window.open(`${repo.homepage}`)}>VER O SITE</button>
          <button onClick={() => window.open(`${repo.html_url}`)}>GITHUB</button>
        </div>
      </div>
    )
}