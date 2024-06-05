import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BlogPostPage = () => {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  console.log(state);
  console.log(window.history.state);

  return (
    <div>
      <h2>Bem vindo à página do Blog</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <section>
            <p>{post.content}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default BlogPostPage;
