import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

import CharsModal from "./modals/CharsModal";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
});

interface Props {
  image: string;
  name: string;
  species: string;
  genre: string;
  type: string;
}

const CharacterCard = ({ image, name, species, genre, type }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={() => setShowModal(!showModal)}>
        {showModal ? (
          <CharsModal
            show={showModal}
            image={image}
            name={name}
            species={species}
            genre={genre}
            type={type}
          />
        ) : null}
        <CardMedia
          component="img"
          alt="rickandmorty"
          height="140"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
