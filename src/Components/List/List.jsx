import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import LooDetails from '../LooDetails/LooDetails';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('test');

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                TEXT BABY
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel> Type </InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="test"> test </MenuItem>
                    <MenuItem value="test2"> test2 </MenuItem>
                    <MenuItem value="test3"> test3 </MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                <LooDetails />
            </Grid>
        </div>
    );
}

export default List;