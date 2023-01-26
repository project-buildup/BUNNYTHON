import styled from 'styled-components';

import Alarm from '../components/Alarm';
import BottomBanner from '../components/BottomBanner';
import Logo from '../components/Logo';
import MainBody from '../components/MainBody';

function MainPage() {
  return (
    <MainPageWrapper>
      <TopBannerWrapper>
        <Logo />
        <Alarm />
      </TopBannerWrapper>
      <MainBody />
      <BottomBanner />
    </MainPageWrapper>
  );
}
const TopBannerWrapper = styled.div`
  margin-top: 20px;
  display: inline-flex;
`;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default MainPage;
