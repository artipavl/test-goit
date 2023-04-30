import { List } from './tweetList.style';

import Tweet from 'components/tweet/tweet';

const TweetList = ({ list, onUpdate, follow }) => {
  return (
    <List>
      {list.map(item => (
        <Tweet follow={follow} user={item} key={item.id} onUpdate={onUpdate} />
      ))}
    </List>
  );
};

export default TweetList;
