import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

// eslint-disable-next-line
export default () => {
  useEffect(() => {
    console.log("useEffect disparado"); // Verifique se useEffect é disparado apenas uma vez

    const loadAll = async () => {
      try {
        let list = await Tmdb.getHomeList();
        console.log("Dados carregados:", list);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadAll();
  }, []); 

  return <div>Clone Netflix Interface UI</div>;
};
