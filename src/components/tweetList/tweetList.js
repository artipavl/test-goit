import Tweet from 'components/tweet/tweet';
import React from 'react';
import { List } from './tweetList.style';

const TweetList = ({ list }) => {
  return (
    <List>
      {list.map(item => (
        <Tweet user={item} key={item.id} />
      ))}
    </List>
  );
};

export default TweetList;
