import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import ReviewQuery from "../../api/ReviewQuery";

import useStyles from "./styles";

const Reviews = ({ id }) => {
  const classes = useStyles();

  const [search, { loading, error, data }] = ReviewQuery();

  useEffect(() => {
    search({ variables: { _eq: id } });
  }, [data]);

  return (
    <Grid container className={classes.reviews}>
      {data?.reviews?.length ? <Typography variant="h6">Reviews:</Typography> : <></>}
      {data?.reviews?.map((review) => (
        <Grid item key={review.id} xs={12} className={classes.reviewItem}>
          <Rating name="read-only" value={review.rating} size="small" readOnly />
          <Typography variant="body1">{review.body}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Reviews;
