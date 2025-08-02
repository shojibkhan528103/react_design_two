import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-3">🏠 Welcome to Home Page</h1>
      <p>This is the homepage of our Bootstrap-styled React app.</p>

      <Link to="/about" className="btn btn-primary me-3">Go to About Page</Link>

      <div className="mt-5">
        <h4>👥 Users List (from API)</h4>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <ul className="list-group">
            {users.map(user => (
              <li key={user.id} className="list-group-item">
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
