import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import EpisodeModal from "./modals/EpisodeModal";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
});

interface Props {
  name: string;
  episodeName: string;
  characters: Array<any>;
  airDate: string;
}

const EpisodeCard = ({ name, episodeName, characters, airDate }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={() => setShowModal(!showModal)}>
        {showModal ? (
          <EpisodeModal
            name={name}
            show={showModal}
            airDate={airDate}
            characters={characters}
          />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {episodeName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EpisodeCard;
