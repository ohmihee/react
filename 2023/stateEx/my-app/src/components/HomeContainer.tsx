import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import BoardHeaderView from './BoardHeaderView';
import BoardContentsView from "./BoardContentsView";

interface Props {
  //
}

const menuBarData = [
  { title: '일반' },
  { title: '공지' },
  { title: 'F&A' },
  { title: 'Q&A' },
];

const HomeContainer = ({

}: Props) => {

  const [ isLogin, setIsLogin ] = useState<boolean>(true);



  useEffect(()=>{
    handleLoginCheck();
  }, []);

  const handleLoginCheck = useCallback(() => {
    if (sessionStorage.getItem('user') === null) {
      alert('로그인이 필요합니다.');
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);
  

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('user');
    setIsLogin(false);
  }, [isLogin]);

  const handleLogin = useCallback(() => {
    sessionStorage.setItem('user', 'test');
    setIsLogin(true);
  }, [isLogin]);

  const loginBtn = () => {
    if (isLogin) {
      const result = confirm('로그아웃 하시겠습니까?');
      if (result) {
        handleLogout();
      }
    } else {
      handleLogin();
    }
  };

  return (
    <Grid container sx={{ width:'100%', pl:10, pr:10 }}>
      <BoardHeaderView
        isLogin={isLogin}
        menuList={menuBarData}
        loginBtn={loginBtn}
      />
      <BoardContentsView/>
    </Grid>
  );
};

export default HomeContainer;

