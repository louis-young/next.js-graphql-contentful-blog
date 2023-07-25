import type { InferGetServerSidePropsType } from "next";

import { BlogPost } from "@/features/blog";
import { sdk } from "@/library/graphql/sdk";
import Head from "next/head";

const BlogPostPage = ({
  blogPost,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
      </Head>

      <BlogPost body={blogPost.body} title={blogPost.title} />
    </>
  );
};

export const getServerSideProps = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  try {
    const getBlogPostByIdResponse = await sdk.GetBlogPostById({ id });

    const blogPost = getBlogPostByIdResponse?.blogPostCollection?.items.at(0);

    if (!blogPost) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blogPost,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default BlogPostPage;
