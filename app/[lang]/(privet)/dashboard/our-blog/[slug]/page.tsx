import { getAllAuthors, getAllblogs, getBlogBySlug } from "@/actions/blog";

import React from "react";
import BlogForm from "@/view/forms/blog-form";

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const values = slug === "new" ? {} : ((await getBlogBySlug(slug)) as any);
  const author = await getAllAuthors();
  const allBlogs = (await getAllblogs({
    author: false,
    relatedBlogs: false,
  })) as any;
  return <BlogForm values={values} author={author} allBlogs={allBlogs} />;
}

export default Page;
