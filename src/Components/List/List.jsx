import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search'

import LooDetails from '../LooDetails/LooDetails';
import useStyles from './styles';

const List = ({ loos, childClicked, isLoading }) => {
    const classes = useStyles();
    const [sortBy, setSortBy] = useState('nameAsc');
    const [searchVal, setSearchVal] = useState("");
    const options = loos?.map(({ name }) => name);

    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        setElRefs((refs) => Array(loos?.length).fill().map((_, i) => refs[i] || createRef()));
        console.log(elRefs);
    }, [loos])

    const sortFunction = (loo1, loo2) => {
        switch (sortBy) {
            case 'nameAsc':
                return 1; // loos is already sorted by the API
            case 'nameDesc':
                return -1;
            case 'rateAsc':
                return 0; // TODO
            case 'rateDesc':
                return 0;
            default:
                return 0;
        }
    }

    const onChange = (_, value) => {
        setSearchVal(value ?? "");
        console.log(value);

        /* const latitude = value.lat;
        const longitude = value.lng;

        setCoordinates({ lat: latitude, lng: longitude });
        console.log({ latitude, longitude }); */
    }

    return (
        <div className={classes.container}>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <Box display="flex" className={classes.search}>
                        <SearchIcon color="primary" />
                        <Autocomplete
                            id="combo-box"
                            disabled={loos ? false : true}
                            options={options}
                            freeSolo
                            renderInput={(params) => <TextField {...params}
                                variant="outlined"
                                label={loos ? "" : "Error: no buildings found"}
                            />}
                            onChange={onChange}
                            style={{ width: '100%', paddingLeft: '10px' }}
                        />
                    </Box>
                    <FormControl className={classes.formControl}>
                        <InputLabel> Sort by </InputLabel>
                        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <MenuItem value="nameAsc">Name (Ascending)</MenuItem>
                            <MenuItem value="nameDesc">Name (Descending)</MenuItem>
                            <MenuItem value="rateAsc">rateAsc</MenuItem>
                            <MenuItem value="rateDesc">rateDesc</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {loos?.filter((loo) => (
                            loo.name.toLowerCase().includes(searchVal.toLowerCase())
                        )).sort(sortFunction).map((loo, i) => (
                            <Grid ref={elRefs[i]} item key={loo.id} xs={12}>
                                <LooDetails
                                    loo={loo}
                                    selected={childClicked === loo.id}
                                    refProp={elRefs[i]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
}

export default List;