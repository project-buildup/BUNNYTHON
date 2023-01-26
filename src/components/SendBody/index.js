import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import banksalad from '../../assets/banksalad.png';
import kakaopay from '../../assets/kakaopay.png';
import toss from '../../assets/toss.png';
function SendBody() {
  const navigate = useNavigate();
  return (
    <SendBodyWrapper>
      <SendingButtonWrapper
        onClick={() => {
          navigate('/done');
          window.scrollTo(0, 0);
        }}
      >
        <img
          src={toss}
          alt=""
          style={{
            width: '25px',
            height: '24px',
            marginRight: '10px',
          }}
        />
        <div>토스에서 송금하기</div>
      </SendingButtonWrapper>
      <SendingButtonWrapper
        onClick={() => {
          navigate('/done');
          window.scrollTo(0, 0);
        }}
      >
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
      </SendingButtonWrapper>
      <SendingButtonWrapper
        onClick={() => {
          navigate('/done');
          window.scrollTo(0, 0);
        }}
      >
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
      </SendingButtonWrapper>
      <SendingButtonWrapper
        onClick={() => {
          navigate('/done');
          window.scrollTo(0, 0);
        }}
      >
        은행앱에서 송금하기
      </SendingButtonWrapper>
    </SendBodyWrapper>
  );
}

const SendBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
`;

const SendingButtonWrapper = styled.div`
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

export default SendBody;
