import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import challenge from '../../assets/challenge.png';
import challenge2 from '../../assets/challenge2.png';
import challenge3 from '../../assets/challenge3.png';
import Challenges from '../Challenges';

function SavingButton() {
  let [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <PopUp isClicked={isClicked}></PopUp>
      <PopUpDiv isClicked={isClicked}>
        <ChallengeSelect>
          <Challenges
            title="배달팁 아끼기"
            cost="2,000 ~ 4,000"
            rest={2}
            total={4}
            image={challenge}
            onClick={() => {
              navigate('/send');
              window.scrollTo(0, 0);
            }}
          />
          <Challenges
            title="택시비 아끼기"
            cost="2,000 ~ 4,000"
            rest={2}
            total={4}
            image={challenge2}
          />
          <Challenges
            title="커피값 아끼기"
            cost="2,000 ~ 4,000"
            rest={2}
            total={4}
            image={challenge3}
          />
        </ChallengeSelect>
      </PopUpDiv>
      <SavingButtonWrapper onClick={() => setIsClicked(true)}>
        절약하러가기
      </SavingButtonWrapper>
    </div>
  );
}

const ChallengeSelect = styled.div`
  position: relative;
  color: #ffffff;
  width: 303px;
  height: 306px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PopUp = styled.div`
  position: absolute;
  width: 100%;
  height: 1200px;
  background-color: #000000;
  left: 0px;
  top: 0px;
  ${({ isClicked }) => (isClicked ? '' : 'display none')};
  opacity: 70%;
`;
const PopUpDiv = styled.div`
  position: absolute;
  width: 333px;
  height: 333px;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 12px;
  ${({ isClicked }) => (isClicked ? '' : 'display : none')};
`;

const SavingButtonWrapper = styled.div`
  width: 313px;
  height: 73px;
  background: #271d1d;
  color: #ffffff;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 22px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background: #270d0d;
  }
`;

export default SavingButton;
