import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

interface Props {
  onChangeFilterValue: (value: string) => void;
}

const Filters = (props: Props) => {
  const [value, setValue] = React.useState("characters");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    props.onChangeFilterValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filters</FormLabel>
      <RadioGroup name="filters" value={value} onChange={handleChange}>
        <FormControlLabel
          value="characters"
          control={<Radio />}
          label="Characters"
        />
        <FormControlLabel
          value="locations"
          control={<Radio />}
          label="Locations"
        />
        <FormControlLabel
          value="episodes"
          control={<Radio />}
          label="Episodes"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Filters;
