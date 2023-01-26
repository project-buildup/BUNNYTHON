import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import checkicon from '../../assets/checkicon.png';
import rightarrow from '../../assets/rightarrow.png';
function DoneBody() {
  const navigate = useNavigate();
  return (
    <DoneBodyWrapper>
      <img
        src={checkicon}
        alt=""
        style={{
          width: '91px',
          height: '91px',
          marginTop: '30px',
        }}
      />
      <div
        style={{
          marginTop: '20px',
          marginBottom: '25px',
          color: '#0047CF',
          fontSize: '15px',
          fontWeight: '600',
        }}
      >
        송금이 완료되었습니다!
      </div>
      <SendingButtonWrapper
        onClick={() => {
          navigate('/rank');
          window.scrollTo(0, 0);
        }}
      >
        <div style={{ marginLeft: '25px' }}>랭킹 확인하기</div>
        <img
          src={rightarrow}
          alt=""
          style={{
            width: '8px',
            height: '15px',
            marginLeft: 'auto',
            marginRight: '25px',
          }}
        />
      </SendingButtonWrapper>
      <SendingButtonWrapper onClick={() => {}}>
        <div style={{ marginLeft: '25px' }}>가치 소비 추천</div>
        <img
          src={rightarrow}
          alt=""
          style={{
            width: '8px',
            height: '15px',
            marginLeft: 'auto',
            marginRight: '25px',
          }}
        />
      </SendingButtonWrapper>
      <SendingButtonWrapper onClick={() => {}}>
        <div style={{ marginLeft: '25px' }}>절약 현황 확인하기</div>
        <img
          src={rightarrow}
          alt=""
          style={{
            width: '8px',
            height: '15px',
            marginLeft: 'auto',
            marginRight: '25px',
          }}
        />
      </SendingButtonWrapper>
    </DoneBodyWrapper>
  );
}

const DoneBodyWrapper = styled.div`
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
  box-sizing: border-box;
  margin-top: 22px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export default DoneBody;
