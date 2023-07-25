import { GenericQueryBoundaries } from "@/common/components/generic-query-boundaries";
import { BlogPostPreviews } from "@/features/blog";

const BlogPostsPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 xl:py-32">
      <div className="xl:grid xl:grid-cols-[10rem_1fr]">
        <div className="xl:col-span-2">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-10 ">
            <h1 className="whitespace-nowrap text-2xl font-bold text-blue">
              From the blog
            </h1>

            <span className="block h-[1px] w-full bg-sky" />
          </div>
        </div>

        <div className="mt-14 xl:col-start-2 xl:col-end-3">
          <GenericQueryBoundaries>
            <BlogPostPreviews />
          </GenericQueryBoundaries>
        </div>
      </div>
    </section>
  );
};

export default BlogPostsPage;
