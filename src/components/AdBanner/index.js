import React from 'react';
import styled from 'styled-components';

import ad from '../../assets/ad.png';
function AdBanner() {
  return (
    <AdBannerWrapper
      style={{
        backgroundImage: `url(${ad})`,
      }}
    >
      <div></div>
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default AdBanner;
