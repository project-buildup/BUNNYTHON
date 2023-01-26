import styled from 'styled-components';

function SavingSection() {
  return (
    <SavingSectionWrapper>
      <SavingCount />
      <SavingRank />
    </SavingSectionWrapper>
  );
}

const SavingSectionWrapper = styled.div`
  width: 131px;
  height: 260px;
  background: #c0c0c0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const SavingCount = styled.div`
  width: 131px;
  height: 125px;
  background: #a0a0a0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  display: flex;
  box-sizing: border-box;
`;

const SavingRank = styled.div`
  width: 131px;
  height: 125px;
  background: #a0a0a0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  display: flex;
  box-sizing: border-box;
`;

export default SavingSection;
