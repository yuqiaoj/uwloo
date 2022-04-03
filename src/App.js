import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { useLazyQuery, gql } from "@apollo/client";

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import OptQuery from './components/api/OptQuery';
import Query from './components/api/Query';


const App = () => {

    const defaultCoordinates = { lat: 43.471, lng: -80.543 };
    const [coordinates, setCoordinates] = useState(defaultCoordinates);
    const [childClicked, setChildClicked] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [searchVal, setSearchVal] = useState("");
    const [sortBy, setSortBy] = useState("asc");

    const options = OptQuery();
    const [search, { loading, error, data }] = Query();

    useEffect(() => {
        (loading) ? setIsLoading(true) : setIsLoading(false);
    }, [loading]);

    useEffect(() => {
        search({ variables: { name: sortBy, _ilike: `%${searchVal}%` } });
    }, [sortBy, searchVal]);

    /* useEffect(() => {
        console.log(coordinates);
    }, [coordinates]); */

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List
                        options={options}
                        loos={data?.loos}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        searchVal={searchVal}
                        setSearchVal={setSearchVal}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        coordinates={coordinates}
                        loos={data?.loos}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;