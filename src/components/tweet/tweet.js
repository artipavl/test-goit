import React from 'react';
import { Avatar, Box, Text, User, Cover, Logo } from './twrrt.styled';
import Button from 'components/button/button';

import Goit from 'img/logo.svg';
import Picture from 'img/picture.svg';

const Tweet = ({ user }) => {
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
      <Button active={true} onClick={() => console.log('start')} />
    </Box>
  );
};

export default Tweet;
