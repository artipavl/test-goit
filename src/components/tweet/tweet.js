import React from 'react';
import { useSelector } from 'react-redux';

import Goit from 'img/logo.svg';
import Picture from 'img/picture.svg';

import { Avatar, Box, Text, User, Cover, Logo, Svg } from './twrrt.styled';

import Button from 'components/button/button';
// import { following } from 'redux/followingSlise';

const Tweet = ({ user, onUpdate }) => {
  // const disputch = useDispatch();

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
          <img src={user.avatar} alt={user.user} width="62" height="62" />
          <Svg>
            <svg
              width="90"
              height="89"
              viewBox="0 0 90 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_832_56)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M45 71.1111C62.1822 71.1111 76.1111 57.1822 76.1111 40C76.1111 22.8178 62.1822 8.88889 45 8.88889C27.8178 8.88889 13.8889 22.8178 13.8889 40C13.8889 57.1822 27.8178 71.1111 45 71.1111ZM45 80C67.0914 80 85 62.0914 85 40C85 17.9086 67.0914 0 45 0C22.9086 0 5 17.9086 5 40C5 62.0914 22.9086 80 45 80Z"
                  fill="#EBD8FF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dii_832_56"
                  x="0.608369"
                  y="-2.19582"
                  width="88.7833"
                  height="90.9791"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4.39163" />
                  <feGaussianBlur stdDeviation="2.19582" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_832_56"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_832_56"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4.39163" />
                  <feGaussianBlur stdDeviation="1.64686" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.985684 0 0 0 0 0.972083 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_832_56"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-2.19582" />
                  <feGaussianBlur stdDeviation="2.19582" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.680944 0 0 0 0 0.480757 0 0 0 0 0.891667 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_832_56"
                    result="effect3_innerShadow_832_56"
                  />
                </filter>
              </defs>
            </svg>
          </Svg>
        </Avatar>
        <Text>{formateNumber(user.tweets)} tweets</Text>
        <Text>{formateNumber(user.followers)} Followers</Text>
      </User>
      <Button
        active={follow.includes(user.id)}
        onClick={() => onUpdate(user)}
      />
    </Box>
  );
};

export default Tweet;
