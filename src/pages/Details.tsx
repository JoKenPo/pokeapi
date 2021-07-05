
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../services/pokeapi';

import { PokemonType } from '../contexts/PokeapiContext'

import '../styles/details.scss';
import { Header } from '../components/Header';

type DetailsParams = {
  pokemon: string
}


export function Details() {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonType>();
	const params = useParams<DetailsParams>();

  useEffect(() => {
    const dataPokeapi = getPokemonDetails(params.pokemon);

    dataPokeapi.then(response => {
      const responseApi: PokemonType = response.data;

      setPokemonDetails(responseApi);
      console.log(responseApi)
    })
  }, [params.pokemon])

  return (
    <div id="desc-page">
      <Header />
      <main>
        <div className="desc-content">
            {pokemonDetails && (
              <div>
                <h1>{pokemonDetails.name} #{pokemonDetails.id}</h1>
                <div className="row">
                  <div className="col"> 
                    <img src={pokemonDetails.sprites.front_default} ></img>
                  </div>
                  <div className="col">
                    <table>
                      <tbody>
                        <tr>
                          <th>Tamanho</th>
                          <th>Peso</th>
                        </tr>
                        <tr>
                          <td>{pokemonDetails.height}</td>
                          <td>{pokemonDetails.weight}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                  <ul>
                    { pokemonDetails.types.map((types) => {
                      return (
                        <li>
                          {types.type.name}
                        </li>
                      )
                    })}
                  </ul>
              </div>
            )}
        </div>
      </main>
    </div>
  )
}