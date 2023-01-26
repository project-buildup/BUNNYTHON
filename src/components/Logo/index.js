import styled from 'styled-components';

import mivv from '../../assets/mivv.png';

function Logo() {
  return (
    <div>
      <LogoWrapper>
        <LogoImg src={mivv} overfit="contain" />
      </LogoWrapper>
    </div>
  );
}

const LogoWrapper = styled.div`
  background-color: black;
  width: 98px;
  height: 38px;
  margin-left: 147px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 90px;
  height: 27px;
  top: 4px;
`;

export default Logo;
