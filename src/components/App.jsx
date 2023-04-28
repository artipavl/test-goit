import { useState, useEffect } from 'react';
import axios from 'axios';

import TweetList from './tweetList/tweetList';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      getUser();
    }
  }, [users.length]);

  async function getUser() {
    try {
      const data = await axios.get(
        'https://6390e6c10bf398c73a963e5b.mockapi.io/api/v1/users'
      );
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TweetList list={users} />
    </div>
  );
};
