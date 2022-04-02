import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ setCoordinates, coordinates, defaultCoordinates }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCdPlzEFklNdpIgeAjhNYTXS1MStuP-EXU' }}
                defaultCenter={defaultCoordinates}
                center={coordinates}
                defaultZoom={17}
                margin={[50, 50, 50, 50]}
                options={''}
                /* onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                }} */
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;