import axios from "axios";

var options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}

const pokeapi = axios.create({
  baseURL: options.protocol + "://" + options.hostName + options.versionPath,
  timeout: options.timeout,
  headers: {'X-Custom-Header': 'foobar'}
})

export async function getPokemonsList(interval) {
  if (!interval) {
    return response
  }

  return await pokeapi.get("pokemon/?limit="+interval.limit+'&offset='+interval.offset)
}

export async function getPokemonDetails(name) {
  if (!name) {
    return response
  }

  return await pokeapi.get("pokemon/"+name+'/')
}

// export default Pokedex(options);