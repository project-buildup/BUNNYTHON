import styled from 'styled-components';

import hsh from '../../assets/hsh.png';
import Rankers from '../Rankers';

function RankBody() {
  const rankers = [
    {
      img: hsh,
      rank: 5,
      nickname: '가보자고',
      account: 18900,
    },
    {
      img: hsh,
      rank: 6,
      nickname: 'Woo0W',
      account: 17000,
    },
    {
      img: hsh,
      rank: 7,
      nickname: '나',
      account: 14200,
    },
    {
      img: hsh,
      rank: 8,
      nickname: '나',
      account: 12000,
    },
  ];

  return (
    <RankBodyWrapper>
      <RankingWrapper onClick={() => {}}>
        <div
          style={{
            marginLeft: '20px',
            fontSize: '18px',
            fontWeight: '700',
            paddingLeft: '13px',
          }}
        >
          {1}
        </div>
        <div
          style={{
            fontSize: '15px',
          }}
        >
          위
        </div>
        <img
          src={hsh}
          alt=""
          style={{
            width: '50px',
            height: '50px',
            marginLeft: '10px',
            marginRight: '15px',
          }}
        />
        <div
          style={{
            fontSize: '16px',
            marginRight: '',
          }}
        >
          {'Sohee'}
        </div>
        <div
          style={{
            fontSize: '16px',
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
          {(98900).toLocaleString('kor')}
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
      </RankingWrapper>
      <MyRank>나의 순위</MyRank>
      {rankers.map((ranker) => (
        <Rankers
          key={ranker.rank}
          img={ranker.img}
          rank={ranker.rank}
          nickname={ranker.nickname}
          account={ranker.account}
        />
      ))}
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
const MyRank = styled.div`
  width: 140px;
  height: 41px;
  background: #3a3a3a;
  color: #ffffff;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 50px;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 25px;
  margin-bottom: 5px;
  font-size: 16px;
`;
const RankingWrapper = styled.div`
  width: 333px;
  height: 90px;
  background: #281f1f;
  color: #ffffff;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 12px;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 22px;
  font-size: 15px;
`;

export default RankBody;
