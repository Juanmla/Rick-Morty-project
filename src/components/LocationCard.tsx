import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import LocationModal from "./modals/LocationModal";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
});

interface Props {
  name: string;
  dimension: string;
  residents: Array<any>;
}

const LocationCard = ({ name, dimension, residents }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={() => setShowModal(!showModal)}>
        {showModal ? (
          <LocationModal
            name={name}
            show={showModal}
            dimension={dimension}
            residents={residents}
          />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {dimension}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LocationCard;
