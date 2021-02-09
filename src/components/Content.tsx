import React, { Fragment } from "react";
import CharacterCard from "./CharacterCard";

interface Characters {
  id: number;
  name: string;
  image: string;
  species: string;
  genre: string;
  type: string;
}

interface Props {
  characters: Array<Characters>;
}

const Content: React.FC<Props> = ({ characters }) => {
  return (
    <Fragment>
      {characters.map((character, idx) => (
        <CharacterCard
          key={idx}
          name={character.name}
          image={character.image}
          species={character.species}
          type={character.type}
          genre={character.genre}
        />
      ))}
    </Fragment>
  );
};

export default Content;
