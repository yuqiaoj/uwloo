import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import { useQuery, gql } from '@apollo/client';

const myQuery = gql`{
    loos(order_by: {name: asc}) {
      id
      lat
      lng
      name
      tags
    }
}`

const App = () => {

    const defaultCoordinates = { lat: 43.471, lng: -80.543 };
    const [coordinates, setCoordinates] = useState(defaultCoordinates);
    const [childClicked, setChildClicked] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const { loading, error, data } = useQuery(myQuery);
    const loos = data?.loos;

    useEffect(() => {
        loading ? setIsLoading(true) : setIsLoading(false);
    }, [loading]);

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
                        loos={loos}
                        childClicked={childClicked}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        coordinates={coordinates}
                        loos={loos}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;