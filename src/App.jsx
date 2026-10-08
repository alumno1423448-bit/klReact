import { useState, useEffect} from 'react'
import header from './assets/header.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import TeamCard from './components/TeamCard';
import { obtenerTeams } from './service/klService';

const App = () => {
  const [teams, setTeams] = useState([]);
    useEffect(() => {
    obtenerTeams()
      .then(teams => setTeams(teams))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container shadow p-0">
      <header className="header-bg">
        <img src={header} alt="header" className="w-100" />
      </header>
      <div className="row p-3 justify-content-center">
        {teams.map((team) => (
          <div className="col-md-6 mb-3" key={team.id}>
            <TeamCard nombre={team.nombre} escudo={team.escudo} poster={team.poster} />
          </div>
        ))}
      </div>
      <footer className='footer-bg text-center'>
        <h1>© 2025 KingLeagues App</h1>
      </footer>
    </div> 
  )
}

export default App
