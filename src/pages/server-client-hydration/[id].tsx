import type { InferGetStaticPropsType } from "next";

import { BlogPost } from "@/features/blog";
import { useGetBlogPostByIdQuery } from "@/library/graphql/generated/hooks";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";

const BlogPostPage = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: blogPostData } = useGetBlogPostByIdQuery({ id });

  const blogPost = blogPostData?.blogPostCollection?.items.at(0);

  return (
    blogPost && (
      <>
        <Head>
          <title>{blogPost.title}</title>
        </Head>

        <BlogPost body={blogPost.body} title={blogPost.title} />
      </>
    )
  );
};

export const getStaticPaths = () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(
      useGetBlogPostByIdQuery.getKey({ id }),
      useGetBlogPostByIdQuery.fetcher({ id })
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        id,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
      revalidate: 60,
    };
  }
};

export default BlogPostPage;
