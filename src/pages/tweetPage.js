import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { following } from 'redux/followingSlise';
import { useSearchParams } from 'react-router-dom';

import { getAllUsers, putUser } from 'API/api';

import Dropdown from 'components/dropdown/dropdown';
import TweetList from 'components/tweetList/tweetList';
import ButtonLoad from 'components/button/buttonLoad';
import Section from 'components/section/section';
import Container from 'components/container/container';

export const TweetPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(() => searchParams.get('q') || 'all');
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);

  const follow = useSelector(state => state.folloving.following);

  const disputch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      getUser();
    }
  }, [users.length]);

  async function getUser() {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  const usersList = useMemo(() => {
    let list = [];
    setLoading(true);
    switch (query) {
      case 'all':
        list = users;
        break;
      case 'follow':
        list = users.filter(user => !follow.includes(user.id));
        break;
      case 'followings':
        list = users.filter(user => follow.includes(user.id));
        break;
      default:
        list = users;
        break;
    }
    setTotalUsers(list.length);
    setLoading(false);
    return list.slice(0, 3 * page);
  }, [query, page, users, follow]);

  async function addFollow(user) {
    try {
      const followers = follow.includes(user.id)
        ? user.followers - 1
        : user.followers + 1;

      const data = await putUser({
        ...user,
        followers,
      });
      setUsers(users => users.map(item => (item.id === user.id ? data : item)));
      disputch(following(user.id));
    } catch (error) {
      console.log(error);
    }
  }

  function changeQuery(value) {
    setQuery(value);
    setPage(1);
    setSearchParams({ q: value });
  }
  return (
    <Section>
      <Container>
        <Dropdown value={query} onChange={changeQuery} />
        <TweetList list={usersList} onUpdate={addFollow} />
        {totalUsers > usersList.length && (
          <ButtonLoad
            disabled={loading}
            onClick={() => setPage(page => page + 1)}
          />
        )}
      </Container>
    </Section>
  );
};
