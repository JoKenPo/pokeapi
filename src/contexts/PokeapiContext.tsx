
export type PokelistType = {
  count: number,
  next: string,
  previous: string,
  results: [
    {
      url: string,
      name: string
    }
  ]
}

export type PokemonType = {
  id: number,
  name: string,
  height: number,
  weight: number,
  sprites: {
    front_default: string
  },
  types: [
    {
      type: {name: string}
    }
  ]
}