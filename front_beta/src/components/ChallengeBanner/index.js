import styled from 'styled-components';

import challenge from '../../assets/challenge.png';

function ChallengeBanner() {
  const contextTitle = '배달말고 포장,';
  const context = '배달팁 아끼기!';
  const savingCost = '\n\n\n회당 절약 금액 2,000 ~ 4,000₩\n';
  const savingPeople = '지금 이 챌린지에 참여중인 세이버';
  const peopleCount = '3,097 명';
  return (
    <ChallengeBannerWrapper>
      <ChallengeBannerImage>
        <ChallengeBannerContexts>
          <div style={{ fontSize: '15px', fontWeight: '700' }}>
            {contextTitle}
          </div>
          <div style={{ fontSize: '20px', fontWeight: '700' }}>{context}</div>
          <div style={{ fontSize: '10px' }}>{savingCost}</div>
          <div style={{ fontSize: '12px' }}>{savingPeople}</div>
          <div
            style={{ fontSize: '10px', marginTop: '10px', marginLeft: '20px' }}
          >
            {peopleCount}
          </div>
        </ChallengeBannerContexts>
      </ChallengeBannerImage>
    </ChallengeBannerWrapper>
  );
}

const ChallengeBannerWrapper = styled.div`
  width: 314px;
  height: 161px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  display: inline-block;
  box-sizing: border-box;
`;

const ChallengeBannerImage = styled.div`
  width: 314px;
  height: 161px;
  border-radius: 16px;
  background-image: url(${challenge});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const ChallengeBannerContexts = styled.div`
  color: #ffffff;
  padding: 20px;
  white-space: pre-line;
  font-weight: 600;
`;
export default ChallengeBanner;
