import { useQuery, gql } from "@apollo/client";

const myQuery = gql`
  query MyQuery {
    loos(order_by: { name: asc }) {
      name
    }
  }
`;

const OptQuery = () => {
  const { loading, error, data } = useQuery(myQuery);

  return data?.loos?.map(({ name }) => name);
};

export default OptQuery;
