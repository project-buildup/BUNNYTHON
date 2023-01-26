import styled from 'styled-components';

import challenge from '../../assets/challenge.png';

function ChallengeBanner() {
  const contextTitle = '배달말고 포장,';
  const context = '배달팁 아끼기!';
  const savingCost = '회당 절약 금액 2,000 ~ 4,000₩';
  const savingPeople = '지금 이 챌린지에 참여중인 세이버';
  const peopleCount = '3,097 명';

  return (
    <ChallengeBannerWrapper>
      <ChallengeBannerImage
        style={{
          backgroundImage: `linear-gradient(to left, rgba(20, 20, 20, 0.8) 10%,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.5) 50%,
            rgba(20, 20, 20, 0.75) 75%,
            rgba(20, 20, 20, 1) 100%), url(${challenge})`,
        }}
      >
        <ChallengeBannerContexts>
          <div style={{ fontSize: '15px', fontWeight: '700' }}>
            {contextTitle}
          </div>
          <div
            style={{ fontSize: '22px', fontWeight: '700', marginTop: '5px' }}
          >
            {context}
          </div>
          <div style={{ fontSize: '10px', marginTop: '30px' }}>
            {savingCost}
          </div>
          <div style={{ fontSize: '12px', marginTop: '3px' }}>
            {savingPeople}
          </div>
          <div
            style={{ fontSize: '10px', marginTop: '5px', marginLeft: '20px' }}
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
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 16px;
  display: inline-block;
  box-sizing: border-box;
`;

const ChallengeBannerImage = styled.div`
  width: 314px;
  height: 161px;
  border-radius: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const ChallengeBannerContexts = styled.div`
  color: #ffffff;
  padding: 20px;
  font-weight: 600;
`;
export default ChallengeBanner;
