import { useEffect } from "react";
import { useRouter } from "next/router";

const Post = ({ userId, title, body }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log("Mounted", id);
  }, []);

  return (
    <>
      <h1>
        User: {userId} Post: {title}
      </h1>
      <p>{body}</p>
    </>
  );
};

export const getStaticProps = async ctx => {
  const { id } = ctx.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const json = await res.json();
  return { props: json };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    paths: posts.map(post => ({
      params: { id: String(post.id) }
    })),
    fallback: false
  };
};

export default Post;
