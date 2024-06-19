import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeatureMovie";



const App = () => {
  const [movieList, setMovieList] = useState([]);

  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      try {
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        let originals = list.filter(i => i.slug == 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeatureData(chosenInfo);

      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <header></header>
      {featureData &&
        <FeaturedMovie item={featureData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
