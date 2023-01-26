import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './pages/MainPage';

function App() {
  return (
    <AppWrapper>
      <BOX>
        <Routes>
          <Route path="/" element={<MainPage />} />
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
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  /* border-radius: 16px; */
  /* padding: 20px; */
  display: flex;
  box-sizing: border-box;
`;

export default App;
