import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
import Rating from '@material-ui/lab';

import useStyles from './styles';
import mapStyles from './mapStyles';

const Map = ({ setCoordinates, coordinates, defaultCoordinates, loos, setChildClicked }) => {
    const classes = useStyles();
    // const isDesktop = useMediaQuery('(min-width:600px)');

    const Marker = () => {
        return <div className={classes.markerContainer}>
            <WcIcon color="primary" fontSize="large" />
        </div>
    }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultCoordinates}
                center={coordinates}
                defaultZoom={17}
                margin={[50, 50, 50, 50]}
                options={{ styles: mapStyles }}
                /* onChange={(e) => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            }} */
                onChildClick={(child) => { setChildClicked(child) }}
            >
                {loos?.map((loo) => (
                    <Marker
                        className={classes.markerContainer}
                        lat={loo.lat}
                        lng={loo.lng}
                        key={loo.id}
                    >
                        <WcIcon color="primary" fontSize="large" />
                    </Marker>
                ))}
            </GoogleMapReact>
        </div >
    );
}

export default Map;