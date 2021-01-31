const Post = ({ userId, title, body }) => {
  return (
    <>
      <h1>
        User: {userId} Post: {title}
      </h1>
      <p>{body}</p>
    </>
  );
};

Post.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
};

export default Post;
