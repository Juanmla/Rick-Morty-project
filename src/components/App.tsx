import React, { useState, useEffect } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { gql, useQuery } from "@apollo/client";

//components
import Filters from "./Filters";
import Content from "./Content";
import ContentLocations from "./ContentLocations";
import SearchBar from "./SearchBar";
import ContentEpisodes from "./ContentEpisodes";
import BasicPagination from "./Pagination";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: "100vh",
    },

    footer: {
      position: "fixed",
      bottom: 0,
      textAlign: "center",
      paddingBottom: 10,
    },
    paginator: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  })
);

const CHARACTERS = gql`
  query CharactersData($search: String!, $page: Int) {
    characters(page: $page, filter: { name: $search }) {
      info {
        pages
      }
      results {
        name
        image
        species
        type
        gender
      }
    }
  }
`;
const LOCATIONS = gql`
  query LocationsData($search: String!, $page: Int) {
    locations(page: $page, filter: { name: $search }) {
      results {
        name
        dimension
        residents {
          name
        }
      }
    }
  }
`;
const EPISODES = gql`
  query EpisodesData($search: String!, $page: Int) {
    episodes(page: $page, filter: { name: $search }) {
      results {
        name
        episode
        id
        air_date
        characters {
          name
        }
      }
    }
  }
`;

interface SearchParams {
  search: string;
  page: number;
  filter: "all" | "characters" | "locations" | "episodes";
}

const App = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [valueFilter, setValueFilter] = useState("characters");
  const [epis, setEpis] = useState([] as any);
  const [locs, setLocs] = useState([] as any);
  const [chars, setChars] = useState([] as any);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchValues: SearchParams = {
    search: search,
    page: page,
    filter: "all",
  };

  const { loading: loadingC, error: errorC, data: dataC } = useQuery(
    CHARACTERS,
    {
      variables: searchValues,
    }
  );

  const { loading: loadingE, error: errorE, data: dataE } = useQuery(EPISODES, {
    variables: searchValues,
  });

  const { loading, error, data } = useQuery(LOCATIONS, {
    variables: searchValues,
  });

  useEffect(() => {
    if (dataE && !loadingE && !errorE) {
      setEpis([...dataE.episodes.results]);
    }
  }, [dataE, errorE, loadingE]);

  useEffect(() => {
    if (dataC && !loadingC && !errorC) {
      setChars([...dataC.characters.results]);
      setTotalPages(dataC.characters.info.pages);
    }
  }, [dataC, errorC, loadingC]);

  useEffect(() => {
    if (data && !loading && !error) {
      setLocs([...data.locations.results]);
    }
  }, [data, error, loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dataC]);

  function showData() {
    if (valueFilter === "locations") {
      return (
        <Grid item container>
          <ContentLocations locations={locs} />
        </Grid>
      );
    }
    if (valueFilter === "episodes") {
      return (
        <Grid item container>
          <ContentEpisodes episodes={epis} />
        </Grid>
      );
    }
    if (valueFilter === "characters") {
      return (
        <Grid item container>
          <Content characters={chars} />
        </Grid>
      );
    }
  }

  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item container xs={3} justify="center">
          <Filters onChangeFilterValue={(s) => setValueFilter(s)} />
        </Grid>
        <Grid item container xs={9} spacing={2}>
          <SearchBar onChangeSearchText={(value) => setSearch(value)} />
          {search.length >= 3 ? showData() : null}
        </Grid>
      </Grid>
      <Grid item className={classes.paginator}>
        <BasicPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </Grid>
      <div className={classes.footer}>
        <Typography>Juan Manuel Lamperti</Typography>
      </div>
    </div>
  );
};

export default App;
