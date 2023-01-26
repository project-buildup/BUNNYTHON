import styled from 'styled-components';

function SavingMoney() {
  return (
    <SavingMoneyWrapper>
      <div style={{ padding: '20px', fontSize: '13px' }}>나의 절약 금액</div>
      <div style={{ padding: '20px', fontSize: '25px', marginLeft: '10px' }}>
        43,600 ₩
      </div>
    </SavingMoneyWrapper>
  );
}

const SavingMoneyWrapper = styled.div`
  width: 169px;
  height: 260px;
  background: #ffd132;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 500;
  justify-content: space-between;
`;

export default SavingMoney;
