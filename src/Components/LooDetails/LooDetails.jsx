import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Grid } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const MyQuery = gql`
  {
    loos {
      id
      lat
      lng
      name
      tags
    }
  }
`;

function LooDetails() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(MyQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  return data.loos.map(({ id, lat, lng, name, photo, tags, address }) => (
    <Grid item key={id} xs={12}>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={photo ? photo : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5"> {name} </Typography>
          {tags?.map(tag => (
            <Chip key={tag} size="small" label={tag} className={classes.chip} />
          ))}
          {address && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
              <LocationOnIcon /> {address}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  ));
}

export default LooDetails;