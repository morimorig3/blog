import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main>
      <article>
        <p>{data.blog.post?.title}</p>
        <p>{data.blog.post?.tags}</p>
        <div>{data.blog.post?.body}</div>
      </article>
    </main>
  );
};

// TODO: slugを動的に変更させる
export const query = graphql`
  query IndexPage {
    blog {
      post(where: { slug: "first-post" }) {
        body
        tags
        title
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
