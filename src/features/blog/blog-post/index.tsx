import type { BlogPostFieldsFragment } from "@/library/graphql/generated/hooks";

type BlogPostProps = Omit<BlogPostFieldsFragment, "__typename">;

export const BlogPost = ({ body, title }: BlogPostProps) => {
  return (
    <article>
      <h1>{title}</h1>

      <p>{body}</p>
    </article>
  );
};
