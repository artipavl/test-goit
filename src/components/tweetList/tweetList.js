import { List } from './tweetList.style';

import Tweet from 'components/tweet/tweet';

const TweetList = ({ list, onUpdate, follow }) => {
  return (
    <List>
      {list.map(item => (
        <li key={item.id}>
          <Tweet follow={follow} user={item} onUpdate={onUpdate} />
        </li>
      ))}
    </List>
  );
};

export default TweetList;
