import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import DonePage from './pages/DonePage';
import MainPage from './pages/MainPage';
import RankPage from './pages/RankPage';
import SendPage from './pages/SendPage';

function App() {
  return (
    <AppWrapper>
      <BOX>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/send" element={<SendPage />} />
          <Route path="/done" element={<DonePage />} />
          <Route path="/rank" element={<RankPage />} />
        </Routes>
      </BOX>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const BOX = styled.div`
  width: 390px;
  height: 1200px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  box-sizing: border-box;
`;
export default App;
