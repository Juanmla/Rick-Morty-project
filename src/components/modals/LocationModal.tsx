import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Typography } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface Props {
  name: string;
  show: boolean;
  dimension: string;
  residents: Array<any>;
}

interface resident {
  name: string;
}

export default function LocationModal({
  name,
  show,
  dimension,
  residents,
}: Props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography>{name}</Typography>
      <Typography>{dimension}</Typography>
      {residents.slice(0, 5).map(
        (resident: resident): JSX.Element => {
          return <Typography>{resident.name}</Typography>;
        }
      )}
    </div>
  );

  return (
    <div>
      <Modal
        open={show}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
