import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import TweetList from 'components/tweetList/tweetList';
import ButtonLoad from 'components/button/buttonLoad';
import Section from 'components/section/section';
import Container from 'components/container/container';

export const TweetPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

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

  const usersList = useMemo(() => {
    return users.slice(0, 3 * page);
  }, [page, users]);
  return (
    <Section>
      <Container>
        <TweetList list={usersList} />
        {users.length > usersList.length && (
          <ButtonLoad onClick={() => setPage(page => page + 1)} />
        )}
      </Container>
    </Section>
  );
};
