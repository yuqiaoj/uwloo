import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
import Rating from '@material-ui/lab';

import useStyles from './styles';
import { Place } from '@material-ui/icons';

const Map = ({ setCoordinates, coordinates, defaultCoordinates, loos, setChildClicked }) => {
    const classes = useStyles();
    // const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultCoordinates}
                center={coordinates}
                defaultZoom={17}
                margin={[50, 50, 50, 50]}
            // options={''}
            /* onChange={(e) => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            }} */
            onChildClick={(child) => {setChildClicked(child)}}
            >
                {loos?.map((loo) => (
                    <div
                        className={classes.markerContainer}
                        lat={loo.lat}
                        lng={loo.lng}
                        key={loo.id}
                    >
                        <WcIcon color="primary" fontSize="large" />
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;