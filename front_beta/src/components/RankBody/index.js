import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import banksalad from '../../assets/banksalad.png';
import hsh from '../../assets/hsh.png';
import kakaopay from '../../assets/kakaopay.png';

function RankBody() {
  const navigate = useNavigate();
  return (
    <RankBodyWrapper>
      <RankingWrapper onClick={() => {}}>
        <img
          src={hsh}
          alt=""
          style={{
            width: '40px',
            height: '40px',
            marginRight: '10px',
          }}
        />
        <div>토스에서 송금하기</div>
      </RankingWrapper>
      <RankingWrapper onClick={() => {}}>
        <img
          src={kakaopay}
          alt=""
          style={{
            width: '40px',
            height: '16px',
            marginRight: '10px',
          }}
        />
        카카오페이에서 송금하기
      </RankingWrapper>
      <RankingWrapper onClick={() => {}}>
        <img
          src={banksalad}
          alt=""
          style={{
            width: '30px',
            height: '30px',
            marginRight: '10px',
          }}
        />
        뱅크샐러드에서 송금하기
      </RankingWrapper>
      <RankingWrapper onClick={() => {}}>은행앱에서 송금하기</RankingWrapper>
    </RankBodyWrapper>
  );
}

const RankBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
`;

const RankingWrapper = styled.div`
  width: 260px;
  height: 61px;
  background: #f6f7fa;
  color: #535353;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 12px;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 22px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export default RankBody;
