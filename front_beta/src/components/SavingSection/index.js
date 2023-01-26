import styled from 'styled-components';

function SavingSection() {
  return (
    <SavingSectionWrapper>
      <SavingCount>
        <div
          style={{
            fontWeight: '700',
            color: '#8B8B8B',
            padding: '15px',
            fontSize: '11px',
          }}
        >
          나의 총 절약 횟수
        </div>
        <div
          style={{
            color: '#6A6A6A',
            padding: '10px',
            fontSize: '20px',
            marginLeft: '50px',
          }}
        >
          33회
        </div>
      </SavingCount>
      <SavingRank>
        <div
          style={{
            fontWeight: '600',
            color: '#8B8B8B',
            padding: '10px',
            fontSize: '10px',
          }}
        >
          택시 대신 만보 걷기 챌린지
        </div>
        <div
          style={{
            fontWeight: '700',
            color: '#8B8B8B',
            padding: '0px 10px',
            fontSize: '12px',
            marginBottom: '30px',
          }}
        >
          내 순위
        </div>
        <div
          style={{
            color: '#6A6A6A',
            padding: '10px',
            fontSize: '20px',
            marginLeft: '50px',
          }}
        >
          13회
        </div>
      </SavingRank>
    </SavingSectionWrapper>
  );
}

const SavingSectionWrapper = styled.div`
  width: 131px;
  height: 260px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const SavingCount = styled.div`
  width: 131px;
  height: 125px;
  background: #eeeff1;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 500;
  justify-content: space-between;
`;

const SavingRank = styled.div`
  width: 131px;
  height: 125px;
  background: #eeeff1;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 500;
  justify-content: space-between;
`;

export default SavingSection;
