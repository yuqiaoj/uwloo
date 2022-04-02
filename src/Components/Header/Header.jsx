import React from 'react';
import { AppBar, Toolbar, Typography, Box, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search'
import { useQuery, gql } from '@apollo/client';

import useStyles from './styles';

const MyQuery = gql`
  {
    loos(order_by: {name: asc}) {
      name
      lat
      lng
    }
  }
`;

const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(MyQuery);

    const onChange = (_, value) => {
        const latitude = value.lat;
        const longitude = value.lng;

        setCoordinates({ lat: latitude, lng: longitude });
        console.log({ latitude, longitude });
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    UWLoo
                </Typography>
                <Box display="flex">
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <div className={classes.search}>
                        <Autocomplete
                            className={classes.input}
                            id="combo-box"
                            options={data?.loos}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                            onChange={onChange}
                        />
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;