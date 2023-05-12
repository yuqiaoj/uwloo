import { useLazyQuery, gql } from "@apollo/client";

const myQuery = gql`
  query MyQuery($name: order_by = asc, $_ilike: String = "") {
    loos(order_by: { name: $name }, where: { name: { _ilike: $_ilike } }) {
      id
      lat
      lng
      name
      tags
      reviews_aggregate {
        aggregate {
          avg {
            rating
          }
          count
        }
      }
    }
  }
`;

const Query = () => {
  return useLazyQuery(myQuery);
};

export default Query;
