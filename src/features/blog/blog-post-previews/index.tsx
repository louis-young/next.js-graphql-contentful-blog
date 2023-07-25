import {
  type BlogPostPreviewFieldsFragment,
  useGetBlogPostPreviewsQuery,
} from "@/library/graphql/generated/hooks";
import classNames from "classnames";
import Link from "next/link";

interface BlogPostPreviewProps {
  id: BlogPostPreviewFieldsFragment["sys"]["id"];
  preface: BlogPostPreviewFieldsFragment["preface"];
  size: "default" | "large";
  title: BlogPostPreviewFieldsFragment["title"];
}

const BlogPostPreview = ({
  id,
  preface,
  size = "default",
  title,
}: BlogPostPreviewProps) => {
  return (
    <Link
      className={classNames(
        "block rounded-md border-2 border-transparent bg-white p-8 shadow transition hover:shadow-lg focus-visible:border-blue focus-visible:shadow-lg",
        {
          "md:col-span-2": size === "large",
        }
      )}
      href={`/${id}`}
    >
      <article className="flex h-full flex-col justify-between">
        <div>
          <h2
            className={classNames("mb-2 font-bold text-blue", {
              "text-2xl": size === "large",
              "text-xl": size === "default",
            })}
          >
            {title}
          </h2>

          <p
            className={classNames({
              "text-base": size === "default",
              "text-lg": size === "large",
            })}
          >
            {preface}
          </p>
        </div>

        <span aria-hidden className="self-end text-3xl text-sky">
          →
        </span>
      </article>
    </Link>
  );
};

export const BlogPostPreviews = () => {
  const { data: blogPostsData } = useGetBlogPostPreviewsQuery({ limit: 10 });

  const blogPosts = blogPostsData?.blogPostCollection?.items;

  return (
    <div className="grid grid-cols-1 gap-8 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
      {blogPosts &&
        blogPosts.map(
          (blogPostPreview, blogPostPreviewIndex) =>
            blogPostPreview && (
              <BlogPostPreview
                id={blogPostPreview.sys.id}
                key={blogPostPreview.sys.id}
                preface={blogPostPreview.preface}
                size={blogPostPreviewIndex % 5 === 0 ? "large" : "default"}
                title={blogPostPreview.title}
              />
            )
        )}
    </div>
  );
};
