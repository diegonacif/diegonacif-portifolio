import {useState, useEffect} from "react";
import api from '../../services/api';

import '../../styles/App.css';

export const ProjectsCards = ({ repoId }) => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function getRepository() {
      await api
        .get(`/repos`)
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
        <img src="#" alt="#" />
        <span>{repo.name}</span>
        <span>{repo.created_at}</span>
        <span>{repo.updated_at}</span>
        <div className="buttons">
          <button>VER O SITE</button>
          <button onClick={() => window.open(`${repo.html_url}`)}>GITHUB</button>
        </div>
      </div>
    )
}