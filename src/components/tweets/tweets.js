import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllUsers, putUser } from 'API/api';

import Dropdown from 'components/dropdown/dropdown';
import TweetList from 'components/tweetList/tweetList';
import ButtonLoad from 'components/button/buttonLoad';

const Tweets = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(() => searchParams.get('q') || 'all');
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [follow, setFollow] = useState(() =>
    localStorage.getItem('follow')
      ? JSON.parse(localStorage.getItem('follow'))
      : []
  );

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    localStorage.setItem('follow', JSON.stringify(follow));
  }, [follow]);

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
      setFollow(follow =>
        follow.includes(user.id)
          ? follow.filter(id => id !== user.id)
          : [...follow, user.id]
      );
    } catch (error) {
      console.log(error);
    }
  }

  function changeQuery(value) {
    setQuery(value);
    setPage(1);
    setSearchParams({ q: value });
  }

  if (usersList.length === 0 && users.length > 0) {
    return (
      <>
        <Dropdown value={query} onChange={changeQuery} />
        <h1>The list is empty</h1>
      </>
    );
  }

  return (
    <>
      <Dropdown value={query} onChange={changeQuery} />
      <TweetList follow={follow} list={usersList} onUpdate={addFollow} />
      {totalUsers > usersList.length && (
        <ButtonLoad
          disabled={loading}
          onClick={() => setPage(page => page + 1)}
        />
      )}
    </>
  );
};

export default Tweets;
