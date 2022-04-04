import { useLazyQuery, gql } from "@apollo/client";

const myQuery = gql`query MyQuery($_eq: uuid = "") {
    reviews(where: {loo_id: {_eq: $_eq}}) {
      id
      rating
      body
    }
  }`

const ReviewQuery = () => {
  return useLazyQuery(myQuery);
}

export default ReviewQuery;