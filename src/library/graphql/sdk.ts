import { getSdk } from "@/library/graphql/generated/sdk";
import { GraphQLClient } from "graphql-request";

import { endpoint } from "../../../graphql-codegen";

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export const sdk = getSdk(graphQlClient);
