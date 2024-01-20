type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const names = pokedex.map((pokemon) => {
    return <li key={pokemon.number}>{pokemon.name}</li>;
  });
  return <ul>{names}</ul>;
}
