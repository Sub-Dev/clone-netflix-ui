import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body1" color="white" mt={2}>
      {'Feito por '}
      <Link href="https://github.com/Sub-Dev">Anthony Marin</Link>
      <Box component="span" ml={1}>
        {new Date().getFullYear()}
      </Box>
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <Divider sx={{ borderBottomWidth: 7, borderColor: '#232323', my: 4 }} />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 1 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 1 },
            width: '100%',
          }}
        >

          <div>
            <Link color='#ffffff' href="https://www.netflix.com/br/">
              Direitos de Imagem para Netflix
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="#ffffff" href="https://www.themoviedb.org/">
              Dados retirados do site Themoviedb.org
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: '#ffffff',
            }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/Sub-Dev"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/anthonymarin-desenvolvedor"
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container >
    </>
  );
}
