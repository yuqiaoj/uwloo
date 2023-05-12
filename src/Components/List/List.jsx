import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";

import LooDetails from "../LooDetails/LooDetails";
import useStyles from "./styles";

const List = ({ options, loos, childClicked, isLoading, searchVal, setSearchVal, sortBy, setSortBy }) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  /* const latitude = value.lat;
        const longitude = value.lng;

        setCoordinates({ lat: latitude, lng: longitude });
        console.log({ latitude, longitude }); */

  useEffect(() => {
    setElRefs((refs) =>
      Array(loos?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [loos]);

  return (
    <div className={classes.container}>
      <>
        <Box display="flex" className={classes.search}>
          <Autocomplete
            id="combo-box"
            freeSolo
            autoComplete
            options={options ?? []}
            value={searchVal}
            disabled={options ? false : true}
            onChange={(_, value) => {
              setSearchVal(value ?? "");
            }}
            style={{ width: "100%", paddingLeft: "10px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
        <FormControl className={classes.formControl}>
          <InputLabel> Sort by </InputLabel>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <MenuItem value="asc">Name (Ascending)</MenuItem>
            <MenuItem value="desc">Name (Descending)</MenuItem>
            {/* <MenuItem value="asc">rateAsc</MenuItem>
                            <MenuItem value="desc">rateDesc</MenuItem> */}
          </Select>
        </FormControl>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <Grid container spacing={3} className={classes.list}>
            {loos?.map((loo, i) => (
              <Grid item ref={elRefs[i]} key={loo.id} xs={12}>
                <LooDetails loo={loo} selected={childClicked === loo.id} refProp={elRefs[i]} />
              </Grid>
            ))}
          </Grid>
        )}
      </>
    </div>
  );
};

export default List;
