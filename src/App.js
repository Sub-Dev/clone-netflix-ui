import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeatureMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import loading from "./images/netflix_loading.gif";



const App = () => {
  const [movieList, setMovieList] = useState([]);

  const [featureData, setFeatureData] = useState(null);

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      try {
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        let originals = list.filter(i => i.slug === 'originals');
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


  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData &&
        <FeaturedMovie item={featureData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer />

      {movieList.length <= 0 &&
        <div className="loading">
          <img src={loading} alt="Carregando..." />
        </div>
      }
    </div>
  );
};

export default App;
