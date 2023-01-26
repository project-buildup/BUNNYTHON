import styled from 'styled-components';

import Alarm from '../components/Alarm';
import BottomBanner from '../components/BottomBanner';
import Logo from '../components/Logo';
import RankBody from '../components/RankBody';

function RankPage() {
  return (
    <RankPageWrapper>
      <TopBannerWrapper>
        <Logo />
        <Alarm />
      </TopBannerWrapper>
      <BottomBanner />
      <RankBody />
    </RankPageWrapper>
  );
}
const TopBannerWrapper = styled.div`
  margin-top: 20px;
  display: inline-flex;
`;

const RankPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default RankPage;
