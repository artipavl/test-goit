import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Avatar, Box, Text, User, Cover, Logo, Svg } from './twrrt.styled';

import Button from 'components/button/button';

import Goit from 'img/logo.svg';
import Picture from 'img/picture.svg';
import Hansel from 'img/Hansel.png';
import { ReactComponent as Ellipse } from 'img/Ellipse.svg';

const Tweet = ({ user, onUpdate }) => {
  const [loading, setLoading] = useState(false);

  function onFollow(params) {
    setLoading(true);
    onUpdate(user).then(() => {
      setLoading(false);
    });
  }

  const follow = useSelector(state => state.folloving.following);

  function formateNumber(number) {
    let str = '';
    let num = number.toString();
    let i = 0;
    for (let index = num.length - 1; index >= 0; index--) {
      str = num[index] + str;
      i++;
      if (Number.isInteger(i / 3) && index !== 0) {
        str = ',' + str;
      }
    }
    return str;
  }

  return (
    <Box>
      <Logo src={Goit} alt="Logo SVG" width="76" height="22" />
      <Cover bg={Picture}></Cover>
      <User>
        <Avatar>
          <img
            src={user.avatar || Hansel}
            alt={user.user}
            width="62"
            height="62"
          />
          <Svg>
            <Ellipse />
          </Svg>
        </Avatar>
        <Text>{formateNumber(user.tweets)} tweets</Text>
        <Text>{formateNumber(user.followers)} Followers</Text>
      </User>
      <Button
        disabled={loading}
        active={follow.includes(user.id)}
        onClick={onFollow}
      />
    </Box>
  );
};

export default Tweet;
