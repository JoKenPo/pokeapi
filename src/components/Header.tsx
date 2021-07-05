import { Link } from 'react-router-dom';
import logoImg from '../assets/images/pokeapi-logo.png';

import '../styles/header.scss';

export function Header() {
  return (
  <header>
    <div className="content">
      <Link to="/list/offset=0">
        <img src={logoImg} alt="POKEAPI" />
      </Link>
    </div>
  </header>
  )
}