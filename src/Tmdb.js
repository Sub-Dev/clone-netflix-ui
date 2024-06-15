const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = process.env.REACT_APP_API_BASE;

const basicFetch = async (endpoint) => {
  try {
    const url = `${API_BASE}${endpoint}&api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao fazer requisição: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error; // Rejeita a promessa para propagar o erro
  }
};

const Tmdb = {
  getHomeList: async () => {
    try {
      // Executa as chamadas individualmente e aguarda cada uma
      const originalsPromise = basicFetch("/discover/tv?with_network=213&language=pt-BR");
      const trendingPromise = basicFetch("/trending/all/week?language=pt-BR");
      const topRatedPromise = basicFetch("/movie/top_rated?language=pt-BR");
      const actionMoviesPromise = basicFetch("/discover/movie?with_genres=28&language=pt-BR");
      const comedyMoviesPromise = basicFetch("/discover/movie?with_genres=35&language=pt-BR");
      const horrorMoviesPromise = basicFetch("/discover/movie?with_genres=27&language=pt-BR");
      const romanceMoviesPromise = basicFetch("/discover/movie?with_genres=10749&language=pt-BR");
      const documentaryMoviesPromise = basicFetch("/discover/movie?with_genres=99&language=pt-BR");

      // Aguarda todas as promessas serem resolvidas usando Promise.all
      const [
        originals,
        trending,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaryMovies,
      ] = await Promise.all([
        originalsPromise,
        trendingPromise,
        topRatedPromise,
        actionMoviesPromise,
        comedyMoviesPromise,
        horrorMoviesPromise,
        romanceMoviesPromise,
        documentaryMoviesPromise,
      ]);

      // Monta o array de dados conforme necessário
      const data = [
        {
          slug: "originals",
          title: "Originais do Netflix",
          items: originals,
        },
        {
          slug: "trending",
          title: "Recomendados para Você",
          items: trending,
        },
        {
          slug: "toprated",
          title: "Em Alta",
          items: topRated,
        },
        {
          slug: "action",
          title: "Ação",
          items: actionMovies,
        },
        {
          slug: "comedy",
          title: "Comédia",
          items: comedyMovies,
        },
        {
          slug: "horror",
          title: "Terror",
          items: horrorMovies,
        },
        {
          slug: "romance",
          title: "Romance",
          items: romanceMovies,
        },
        {
          slug: "documentary",
          title: "Documentário",
          items: documentaryMovies,
        },
      ];

      return data;
    } catch (error) {
      console.error("Erro ao carregar lista de filmes:", error);
      throw error; // Rejeita a promessa para propagar o erro
    }
  },
};

export default Tmdb;
