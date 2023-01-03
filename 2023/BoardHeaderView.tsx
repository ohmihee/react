import React from 'react';
import { observer } from 'mobx-react';
import { Button, Container, Divider, Grid, IconButton, Link, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type MenuType = {
  title: string
};

interface Props {
  isLogin: boolean,
  menuList: MenuType[],
  loginBtn: () => void
}

const BoardHeaderView = observer(({
  isLogin,
  menuList,
  loginBtn,
}: Props)=>{
  return (
    <Grid container sx={{ flexDirection:'column' }}>
      <Toolbar sx={{ mb:1 }}>
        <Typography
          align='center'
          flex={1}
        >
          게시판
        </Typography>
          <TextField id='standard-basic' variant='standard' size='small'/>
          <IconButton sx={{ mr:5 }}>
            <SearchIcon/>
          </IconButton>
          {
            isLogin
              ?
              <Button variant="outlined" size="small" onClick={loginBtn}>LogOut</Button>
              :
              <Grid sx={{ flexWrap:'nowrap' }}>
                <Button variant="contained" size="small" sx={{ mr:1 }}>Join</Button>
                <Button variant="outlined" size="small" onClick={loginBtn}>Sign up</Button>
              </Grid>
          }
      </Toolbar>
      <Divider />
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent:'space-between', overflowX:'auto', ml:20, mr:20 }}
      >
        {
          menuList.map((ele, index)=>(
            <Link
              key={index}
              href={ele.title}
              sx={{ p:1, flexShrink: 0, color:'gray', textDecoration:'none', ':hover':{ fontWeight:700 } }}
            >
              {ele.title}
            </Link>
          ))
        }
      </Toolbar>
      <Divider />
    </Grid>
  );
});


export default BoardHeaderView;
