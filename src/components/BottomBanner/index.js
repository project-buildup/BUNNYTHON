import styled from 'styled-components';

import archiveicon from '../../assets/archiveicon.png';
import challengeicon from '../../assets/challengeicon.png';
import consumeicon from '../../assets/consumeicon.png';
import mypageicon from '../../assets/mypageicon.png';
import savingicon_active from '../../assets/savingicon_active.png';

function BottomBanner() {
  return (
    <BottomBannerPin>
      <BottomBannerWrapper>
        <img
          src={savingicon_active}
          alt=""
          style={{
            width: '25px',
            height: '24px',
            marginRight: '10px',
          }}
        />
        <img
          src={consumeicon}
          alt=""
          style={{
            width: '25px',
            height: '24px',
            marginRight: '10px',
          }}
        />
        <img
          src={challengeicon}
          alt=""
          style={{
            width: '25px',
            height: '24px',
            marginRight: '10px',
          }}
        />
        <img
          src={archiveicon}
          alt=""
          style={{
            width: '25px',
            height: '24px',
            marginRight: '10px',
          }}
        />
        <img
          src={mypageicon}
          alt=""
          style={{
            width: '25px',
            height: '24px',
            marginRight: '10px',
          }}
        />
      </BottomBannerWrapper>
    </BottomBannerPin>
  );
}

const BottomBannerPin = styled.div`
  box-sizing: border-box;
  width: 390px;
  height: 60px;
  background-color: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
`;

const BottomBannerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default BottomBanner;
