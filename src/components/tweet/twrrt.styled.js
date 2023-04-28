import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding: 28px 0 36px 0;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 70px 0 26px 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Cover = styled.div`
  width: 308px;
  height: 168px;

  margin: auto;
  margin-bottom: 18px;

  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    border-radius: 50%;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Svg = styled.div`
  position: absolute;
  top: 0;
`;
