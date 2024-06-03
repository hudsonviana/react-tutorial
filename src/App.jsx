import { useState, useEffect } from 'react';

const App = () => {
  const [blogPostData, setBlogPostData] = useState({
    title: '',
    body: '',
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (blogPostData.title && blogPostData.body) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                userId: 1,
                title: blogPostData.title,
                body: blogPostData.body,
              }),
              headers: {
                'Content-type': 'application/json',
              },
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          }
        }}
      >
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          value={blogPostData.title}
          onChange={(e) =>
            setBlogPostData((currentBlogPostState) => ({
              ...currentBlogPostState,
              title: e.target.value,
            }))
          }
        />
        <br />
        <label htmlFor="body">Body </label>
        <input
          type="text"
          id="body"
          value={blogPostData.body}
          onChange={(e) =>
            setBlogPostData((currentBlogPostState) => ({
              ...currentBlogPostState,
              body: e.target.value,
            }))
          }
        />
        <br />
        <button>Create Post</button>
      </form>
    </div>
  );
};

export default App;
