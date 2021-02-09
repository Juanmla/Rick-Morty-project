import React, { Fragment } from "react";
import EpisodeCard from "./EpisodeCard";

interface Episodes {
  id: number;
  name: string;
  episode: string;
  characters: Array<any>;
  air_date: string;
}

interface Props {
  episodes: Array<Episodes>;
}

const ContentEpisodes: React.FC<Props> = ({ episodes }) => {
  return (
    <Fragment>
      {episodes.map((episode, idx) => (
        <EpisodeCard
          key={idx}
          name={episode.name}
          airDate={episode.air_date}
          episodeName={episode.episode}
          characters={episode.characters}
        />
      ))}
    </Fragment>
  );
};

export default ContentEpisodes;
