import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_API);

export { gql };
export default (query, variables) => client.request(query, variables);
