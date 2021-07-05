
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPokemonsList } from '../services/pokeapi';

import '../styles/list.scss';
import { Button } from '../components/Button';
import { PokelistType } from '../contexts/PokeapiContext'
import { Header } from '../components/Header';

type ListParams = {
  offset: string
}


export function List() {
  const [pokelist, setPokelist] = useState<PokelistType>();
	const params = useParams<ListParams>();

  const interval = {
    limit: 10,
    offset: params.offset? params.offset : "0"
  }

  useEffect(() => {
    const dataPokeapi = getPokemonsList(interval);

    dataPokeapi.then(response => {
      const responseApi: PokelistType = response.data;

      setPokelist(responseApi);
    })
  }, [interval.offset])

  return (
    <div id="list-page">
      <Header />
      <main>
        <div className="list-content">
          <ul className="pokemon-list">
            {pokelist && pokelist?.results.map((pokemon) => {
              return (
                <li>
                  <Link to={`/details/${pokemon.name}`}>
                    <h3>{pokemon.name}</h3>
                    <p>ver mais...</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="footer">
          <Link to={`/list/offset=${Number(interval.offset) - interval.limit}`} className="no-link prev-button">
            <Button disabled={(Number(interval?.offset) - interval?.limit) < 0}>
              &lt;
            </Button>
          </Link>
          <Link to={`/list/offset=${Number(interval.offset) + interval.limit}`} className="no-link next-button">
            <Button disabled={pokelist && (Number(interval?.offset) + interval?.limit) > pokelist?.count}>
              &gt;
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}