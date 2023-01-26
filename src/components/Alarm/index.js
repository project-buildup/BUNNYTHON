import styled from 'styled-components';

import alarm from '../../assets/alarm.png';

function Alarm() {
  return (
    <div>
      <AlarmImg src={alarm} overfit="contain" />
    </div>
  );
}

const AlarmImg = styled.img`
  margin-top: 6px;
  margin-left: 78px;
`;

export default Alarm;
