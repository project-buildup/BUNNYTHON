import styled from 'styled-components';

function AdBanner() {
  return (
    <AdBannerWrapper>
      <div style={{ padding: '20px' }}>광고 예시입니다!</div>
    </AdBannerWrapper>
  );
}

const AdBannerWrapper = styled.div`
  width: 314px;
  height: 118px;
  background: #f0f0f0;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 16px;
  display: inline-block;
  box-sizing: border-box;
  margin-top: 36px;
`;

export default AdBanner;
