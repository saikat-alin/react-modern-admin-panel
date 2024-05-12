import { useState,useEffect } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ButtonBase
} from '@mui/material';

// assets
import { IconBrightnessUp } from '@tabler/icons';
import { IconMoonStars } from '@tabler/icons';

import { SET_MODE } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';

// ==============================|| Theme Mode ||============================== //

const ThemeMode = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.customization.mode);

  const [themeMode,setThemeMode]=useState(mode)

  useEffect(() => {
    setThemeMode(mode);
  }, [mode]);

  const handleMode=()=>{
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
    dispatch({ type: SET_MODE, mode: newMode });
  }

  return (
    <>
      <Box
        sx={{
          ml: 2,
          [theme.breakpoints.down('md')]: {
            mr: 0
          }
        }}
      >
        <ButtonBase sx={{ borderRadius: '12px' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleMode}
          >
            {themeMode === 'dark' ? <IconMoonStars stroke={1.5} size="1.3rem" /> : <IconBrightnessUp stroke={1.5} size="1.3rem" />}
            
            
          </Avatar>
        </ButtonBase>
      </Box>
    </>
  );
};

export default ThemeMode;
