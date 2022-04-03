import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';

import ReviewQuery from '../api/ReviewQuery';

const Reviews = ({ id }) => {
    const [search, { loading, error, data }] = ReviewQuery();

    useEffect(() => {
        search({ variables: { _eq: id } });
    }, [data])

    return (
        <Grid container>
            {data?.reviews?.map((review) => (
                <p>{review.rating} | {review.body}</p>
            ))}
        </Grid>
    );
}

export default Reviews;