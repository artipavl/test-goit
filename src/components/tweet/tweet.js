import React from 'react';
import { Avatar, Box, Text, User, Cover, Logo } from './twrrt.styled';
import Button from 'components/button/button';

import Goit from 'img/logo.svg';
import Picture from 'img/picture.svg';
// import Ellipse from 'img/Ellipse.png';

const Tweet = ({ user }) => {
  return (
    <Box>
      <Logo src={Goit} alt="Logo SVG" width="76" height="22" />
      <Cover bg={Picture}></Cover>
      <User>
        <Avatar>
          <img src={user.avatar} alt={user.user} width="64" height="64" />
          {/* <EllipseEl src={Ellipse} alt="Ellipse" /> */}
        </Avatar>
        <Text>{user.tweets} tweets</Text>
        <Text>{user.followers} Followers</Text>
      </User>
      <Button active={true} onClick={() => console.log('start')} />
    </Box>
  );
};

export default Tweet;
