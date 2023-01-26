import styled from 'styled-components';

function Rankers({ img, rank, nickname, account }) {
  return (
    <RankersWrapper>
      <div
        style={{
          marginLeft: '20px',
          fontSize: '18px',
          fontWeight: '700',
          paddingLeft: '13px',
        }}
      >
        {rank}
      </div>
      <div
        style={{
          fontSize: '15px',
        }}
      >
        위
      </div>
      <img
        src={img}
        alt=""
        style={{
          width: '35px',
          height: '35px',
          marginLeft: '10px',
          marginRight: '15px',
        }}
      />
      <div
        style={{
          fontSize: '14px',
          marginRight: '',
        }}
      >
        {nickname}
      </div>
      <div
        style={{
          fontSize: '14px',
        }}
      >
        님
      </div>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: '14px',
          fontWeight: '400',
        }}
      >
        {account.toLocaleString('kor')}
      </div>
      <div
        style={{
          marginLeft: '5px',
          marginRight: '20px',
          fontSize: '14px',
          fontWeight: '400',
        }}
      >
        원
      </div>
    </RankersWrapper>
  );
}

const RankersWrapper = styled.div`
  width: 333px;
  height: 62px;
  border-radius: 16px;
  background: #f6f7fa;
  color: #535353;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 22px;
`;

export default Rankers;
