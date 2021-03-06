import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@emotion/react';

import FoodifyTheme from '../themes/FoodifyTheme';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (p: string): any => {
    navigate(p);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={FoodifyTheme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => handleClose("/favDish")}>Favorite Dishes</MenuItem>
              <MenuItem onClick={() => handleClose("/custDish")}>Custom Dishes</MenuItem>
              <MenuItem onClick={() => handleClose("/randomDish")}>Random Dish</MenuItem>
            </Menu>
            <Typography
              color="inherit"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}>
              Foodify App
            </Typography>
            <Button color="inherit" onClick={() => navigate("/")}>Login</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
