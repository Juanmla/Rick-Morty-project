import React, { Fragment } from "react";
import LocationCard from "./LocationCard";

interface Locations {
  id: number;
  name: string;
  dimension: string;
  residents: Array<any>;
}

interface Props {
  locations: Array<Locations>;
}

const ContentLocations: React.FC<Props> = ({ locations }) => {
  return (
    <Fragment>
      {locations.map((location, idx) => (
        <LocationCard
          key={idx}
          name={location.name}
          dimension={location.dimension}
          residents={location.residents}
        />
      ))}
    </Fragment>
  );
};

export default ContentLocations;
