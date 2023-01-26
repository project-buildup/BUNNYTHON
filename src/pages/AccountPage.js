import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function AccountPage() {
  const navigate = useNavigate();

  return (
    <AccountPageWrapper>
      <div style={{ display: 'flex', marginRight: 'auto' }}>
        <div
          style={{
            marginLeft: '20px',
            marginTop: '20px',
            fontWeight: '700',
            fontSize: '18px',
          }}
        >
          내 토스증권 계좌
        </div>
        <div
          style={{
            marginTop: '20px',
            marginRight: 'auto',
            fontSize: '18px',
          }}
        >
          에서
        </div>
      </div>
      <div
        style={{
          marginTop: '20px',
          marginRight: 'auto',
          marginLeft: '30px',
          fontSize: '25px',
        }}
      >
        **은행 절약계좌로
      </div>
      <AccountWrapper
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        <Input
          id="money"
          type="number"
          placeholder="금액을 입력해주세요."
          min="2000"
          max="4000"
        />
        <div style={{ fontSize: '22px', marginLeft: '5px' }}>
          원 송금할까요?
        </div>
      </AccountWrapper>
      <AccountButtonWrapper
        onClick={() => {
          navigate('/done');
          sessionStorage.setItem(
            'money',
            document.getElementById('money').value,
          );
        }}
      >
        송금하기
      </AccountButtonWrapper>
    </AccountPageWrapper>
  );
}
const Input = styled.input`
  width: 200px;
  height: 50px;

  font-size: 22px;
  text-align: right;
  border: none;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const AccountPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const AccountWrapper = styled.div`
  justify-content: center;
`;

const AccountButtonWrapper = styled.div`
  width: 260px;
  height: 61px;
  background: #f6f7fa;
  color: #535353;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
  border-radius: 12px;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 60px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export default AccountPage;
