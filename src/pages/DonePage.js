import styled from 'styled-components';

import Alarm from '../components/Alarm';
import BottomBanner from '../components/BottomBanner';
import DoneBody from '../components/DoneBody';
import Logo from '../components/Logo';

function DonePage() {
  return (
    <DonePageWrapper>
      <TopBannerWrapper>
        <Logo />
        <Alarm />
      </TopBannerWrapper>
      <DoneBody />
      <BottomBanner />
    </DonePageWrapper>
  );
}
const TopBannerWrapper = styled.div`
  margin-top: 20px;
  display: inline-flex;
`;

const DonePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default DonePage;
