import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Box, Text, User, Cover, Logo } from './twrrt.styled';
import Button from 'components/button/button';

import Goit from 'img/logo.svg';
import Picture from 'img/picture.svg';
import { following } from 'redux/followingSlise';

const Tweet = ({ user }) => {
  const disputch = useDispatch();
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
          <img src={user.avatar} alt={user.user} width="64" height="64" />
        </Avatar>
        <Text>{formateNumber(user.tweets)} tweets</Text>
        <Text>{formateNumber(user.followers)} Followers</Text>
      </User>
      <Button
        active={follow.includes(user.id)}
        onClick={() => disputch(following(user.id))}
      />
    </Box>
  );
};

export default Tweet;
