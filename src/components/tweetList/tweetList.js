import { List } from './tweetList.style';

import Tweet from 'components/tweet/tweet';

const TweetList = ({ list, onUpdate }) => {
  return (
    <List>
      {list.map(item => (
        <Tweet user={item} key={item.id} onUpdate={onUpdate} />
      ))}
    </List>
  );
};

export default TweetList;
