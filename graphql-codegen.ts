import type { CodegenConfig } from "@graphql-codegen/cli";

export const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

export const codegenConfiguration: CodegenConfig = {
  generates: {
    "src/library/graphql/generated/graphql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/library/graphql/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/library/graphql/generated/hooks.ts": {
      config: {
        dedupeFragments: true,
        exportFragmentSpreadSubTypes: true,
        exposeFetcher: true,
        exposeQueryKeys: true,
        fetcher: {
          endpoint,
          fetchParams: {
            headers: {
              Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          },
        },
        inlineFragmentTypes: "combine",
        preResolveTypes: true,
        rawRequest: false,
        skipTypename: false,
      },
      documents: ["src/library/graphql/documents/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
    "src/library/graphql/generated/sdk.ts": {
      config: {
        dedupeFragments: true,
        exportFragmentSpreadSubTypes: true,
        inlineFragmentTypes: "combine",
        preResolveTypes: true,
        rawRequest: false,
        skipTypename: false,
      },
      documents: ["src/library/graphql/documents/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
  ignoreNoDocuments: true,
  overwrite: true,
  schema: [
    {
      [endpoint]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
};

export default codegenConfiguration;
