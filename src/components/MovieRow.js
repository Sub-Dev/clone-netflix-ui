import React from "react";
import './MovieRow.css';

const MovieRow = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="moviesRow--listarea">
        <div className="movieRow--list">

          {items && items.results && items.results.length > 0 ? (
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  key={key}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title || item.name}
                  className="movieRow--image"
                />
              </div>
            ))

          ) : (
            <div>Carregando...</div>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
