import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Grid } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import Reviews from '../Reviews/Reviews'

import useStyles from './styles';

function LooDetails({ loo, selected, refProp }) {
  const classes = useStyles();

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 100 }}
        image={loo.photo ? loo.photo : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={loo.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{loo.name}</Typography>
        <Box display="flex" justifyContent="left" my={1}>
          <Typography component="legend">{loo.reviews_aggregate.aggregate.avg.rating}</Typography>
          <Rating name="read-only" value={loo.reviews_aggregate.aggregate.avg.rating} precision={0.1} readOnly />
          <Typography component="legend">({loo.reviews_aggregate.aggregate.count} review{!(loo.reviews_aggregate.aggregate.count == 1) && 's'})</Typography>
        </Box>
        {loo.tags?.map(tag => (
          <Chip key={tag} size="small" label={tag} className={classes.chip} />
        ))}
        {/* {loo?.address && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
              <LocationOnIcon /> {loo.address}
            </Typography>
          )} */}
          <Reviews id={loo.id} />
      </CardContent>
    </Card>
  );
}

export default LooDetails;