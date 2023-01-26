import styled from 'styled-components';

import AdBanner from '../AdBanner';
import ChallengeBanner from '../ChallengeBanner';
import Saving from '../Saving';
import SavingButton from '../SavingButton';

function MainBody() {
  return (
    <MainBodyWrapper>
      <ChallengeBanner />
      <AdBanner />
      <Saving />
      <SavingButton />
    </MainBodyWrapper>
  );
}
const MainBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
`;

export default MainBody;
