import styled from 'styled-components';

import SavingMoney from '../SavingMoney';
import SavingSection from '../SavingSection';

function Saving() {
  return (
    <SavingWrapper>
      <SavingMoney />
      <SavingSection />
    </SavingWrapper>
  );
}

const SavingWrapper = styled.div`
  width: 314px;
  height: 260px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 36px;
`;

export default Saving;
