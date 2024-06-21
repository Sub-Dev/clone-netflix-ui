import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../images/netflix_logo.svg';
import user from '../images/Netflix-avatar-3.png';
import './Header.css';
import { Hidden } from '@mui/material';

const pages = ['Início', 'Séries', 'Filmes', 'Mais Recentes', 'Minha Lista'];
const settings = ['Perfil', 'Conta', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('black');
      } else {
        header.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header>
      <AppBar
        sx={{ backgroundColor: 'inherit', boxShadow: 'none' }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <a href="/" className="header--logo">
                <img src={logo} alt="Netflix Logo" />
              </a>
            </Box>
            {/* Logo para dispositivos móveis */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <a href="/" className="header--logo">
                <img src={logo} alt="Netflix Logo" />
              </a>
            </Box>

            {/* Menu para dispositivos grandes */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }} className="header--menus">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  className="header--menu-item"
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Ícones de busca e notificação */}
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <IconButton size="large" aria-label="search" color="inherit" className="header--search">
                <SearchIcon />
              </IconButton>
              <IconButton size="large" aria-label="notifications" color="inherit" className="header--notification">
                <NotificationsIcon />
              </IconButton>

              {/* Avatar do usuário */}
              <IconButton className="header--user">
                <Avatar alt="User Profile" src={user} variant="rounded" sx={{ width: 32, height: 32 }} />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default ResponsiveAppBar;