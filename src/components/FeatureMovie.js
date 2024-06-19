import React from "react";
import './FeatureMovie.css';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // white
      contrastText: '#000000', // black
    },
    secondary: {
      main: '#333', // gray shade
    },
  },
});

const FeatureMovie = ({ item }) => {
  if (!item) return null; // Safeguard against undefined item

  const firstDate = new Date(item.first_air_date);
  const voteImdb = item.vote_average.toFixed(1);
  const genres = item.genres.map(genre => genre.name).join(', '); // Map genres to a comma-separated string

  return (
    <ThemeProvider theme={theme}>
      <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}>
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
              <div className="featured--points">{voteImdb} Nota Imdb</div>
              <div className="featured--year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">
                {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}
              </div>
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">
              <Stack direction="row" spacing={1}>
                <Button size="large" href={`/watch/${item.id}`}
                  className="featured--watchbutton"
                  variant="contained" color="primary" startIcon={<PlayArrowIcon style={{ fontSize: 30 }} />}>
                  Assistir
                </Button>
                <Button href={`/list/add/${item.id}`}
                  className="featured--mylistbutton"
                  variant="contained" color="secondary">
                  + Minha Lista
                </Button>
              </Stack>
            </div>
            <div className="featured--genres"><strong>Gêneros: </strong>{genres}</div>
          </div>
        </div>
      </section>
    </ThemeProvider >
  );
};

export default FeatureMovie;
