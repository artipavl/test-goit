import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import TweetList from 'components/tweetList/tweetList';
import ButtonLoad from 'components/button/buttonLoad';
import Section from 'components/section/section';
import Container from 'components/container/container';
import { useDispatch, useSelector } from 'react-redux';
import { following } from 'redux/followingSlise';

export const TweetPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const follow = useSelector(state => state.folloving.following);

  const disputch = useDispatch();

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

  async function addFollow(user) {
    try {
      const followers = follow.includes(user.id)
        ? user.followers - 1
        : user.followers + 1;
      const { data } = await axios.put(
        `https://6390e6c10bf398c73a963e5b.mockapi.io/api/v1/users/${user.id}`,
        {
          ...user,
          followers,
        }
      );
      setUsers(users => users.map(item => (item.id === user.id ? data : item)));
      disputch(following(user.id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Section>
      <Container>
        <TweetList list={usersList} onUpdate={addFollow} />
        {users.length > usersList.length && (
          <ButtonLoad onClick={() => setPage(page => page + 1)} />
        )}
      </Container>
    </Section>
  );
};
