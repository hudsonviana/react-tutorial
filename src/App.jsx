import { Outlet, Link, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>App Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/users">Users </Link>
          </li>
          <li>
            <Link to="/blog-posts">Blog Posts </Link>
          </li>
        </ul>
      </nav>
      <div>
        <label htmlFor="data">Enter Data</label>
        <input
          type="text"
          id="data"
          onChange={(e) => {
            if (e.target.value.length > 10) {
              navigate('/blog-posts', {
                state: {
                  posts: [
                    {
                      id: 1,
                      title: 'Hello World',
                      content: 'Welcome to my first post',
                    },
                  ],
                },
              });
            }
          }}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
