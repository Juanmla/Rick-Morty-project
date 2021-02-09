import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

interface Props {
  page: number;
  setPage: any;
  totalPages: number;
}

export default function BasicPagination({ page, setPage, totalPages }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        variant="outlined"
        count={totalPages}
        page={page}
        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
          setPage(value)
        }
      />
    </div>
  );
}
