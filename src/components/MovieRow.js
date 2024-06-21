import React, { useState, useEffect } from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);
  const [listWidth, setListWidth] = useState(0);

  useEffect(() => {
    if (items && items.results) {
      const newListWidth = items.results.length * 150;
      setListWidth(newListWidth);
    }
  }, [items]);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);

    if (x < window.innerWidth - listWidth) {
      x = window.innerWidth - listWidth - 60;
    }

    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: `${listWidth}px` // Largura da lista dinâmica
        }}>
          {items && items.results && items.results.length > 0 ? (
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title || item.name}
                  className="movieRow--image"
                />
              </div>
            ))
          ) : (
            <div>Carregando...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
