import styled from 'styled-components';

function Challenges({ title, cost, rest, total, image, onClick }) {
  return (
    <ChallengesWrapper
      style={{
        backgroundImage: `linear-gradient(to left, rgba(20, 20, 20, 0) 10%,
    rgba(20, 20, 20, 0.25) 25%,
    rgba(20, 20, 20, 0.5) 50%,
    rgba(20, 20, 20, 0.75) 75%,
    rgba(20, 20, 20, 1) 100%), url(${image})`,
      }}
      onClick={
        title === '배달팁 아끼기' ? onClick : () => alert('준비중입니다...')
      }
    >
      <div
        style={{
          fontSize: '22px',
          fontWeight: '700',
          paddingLeft: '13px',
          paddingTop: '13px',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: '10px',
          fontWeight: '600',
          paddingLeft: '13px',
          paddingTop: '6px',
        }}
      >
        회당 절약 금액 {cost} ₩
      </div>
      <div
        style={{
          fontSize: '10px',
          fontWeight: '700',
          paddingTop: '6px',
          paddingRight: '13px',
          textAlign: 'right',
        }}
      >
        오늘 남은 절약 가능 횟수 ({rest} / {total})
      </div>
    </ChallengesWrapper>
  );
}

const ChallengesWrapper = styled.div`
  width: 303px;
  height: 92px;
  border-radius: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export default Challenges;
