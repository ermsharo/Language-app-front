import styled from "styled-components";
import Word from "./Word";
import React from "react";
import Pagination from "@mui/material/Pagination";

const WordListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const OptionButton = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
`;

export default function Favorites({
  favoritesPage,
  setSelectedWord,
  setInfoDrawerOpen,
  dataFavorites,
  setFavoritesPage,
}) {



  const handleChange = (event, value) => {
    setFavoritesPage(value);
  };

  return (
    <div>
      <WordListGrid>
        {dataFavorites.results !== undefined &&
          dataFavorites.results.map((item) => (
            <Word
              item={item.word}
              setSelectedWord={setSelectedWord}
              setInfoDrawerOpen={setInfoDrawerOpen}
              isFavorite={item.isFavorite}
            />
          ))}
      </WordListGrid>
      <OptionButton>
        {dataFavorites.totalPages !== 0 && (
          <Pagination
            count={dataFavorites.totalPages}
            page={favoritesPage}
            onChange={handleChange}
          />
        )}
      </OptionButton>
    </div>
  );
}
