import styled from "styled-components";
import Word from "./Word";
import React, { useEffect, useState } from "react";
import { GetFavoritesList } from "../../Services/getFavorites";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
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
  setFavoritespage,
  favorites,
  setFavorites,
  setSelectedWord,
  setInfoDrawerOpen,
}) {
  const navigate = useNavigate();

  let filterValues = () => {
    const propertyNames = Object.keys(favorites);

    let valideValues = [];
    for (let i = 0; i < propertyNames.length; i++) {
      if (favorites[propertyNames[i]]) valideValues.push(propertyNames[i]);
    }
    return valideValues;
  };

  const [favoriteList, setFavoriteList] = useState(filterValues(favorites));

  const [
    { dataFavorites, isLoadingFavorites, isErrorFavorites },
    changePageFavorites,
  ] = GetFavoritesList();

  useEffect(() => {}, [favoriteList, setFavoriteList]);

  // useEffect(() => {
  //   changePageFavorites(historyPage);
  // }, [historyPage]);

  const handleChange = (event, value) => {
    setFavoritespage(value);
  };

  if (isErrorFavorites) {
    if (isErrorFavorites.auth === false) navigate("/login");
    return <div>Something went wrong ...</div>;
  }
  if (isLoadingFavorites) return <Loading />;
  if (dataFavorites)
    return (
      <div>
        <WordListGrid>
          {dataFavorites.results !== undefined &&
            dataFavorites.results.map((item, index) => (
              <Word
                index={index}
                item={item}
                setSelectedWord={setSelectedWord}
                favorites={favorites}
                setFavorites={setFavorites}
                setInfoDrawerOpen={setInfoDrawerOpen}
              />
            ))}
        </WordListGrid>
        <OptionButton>
          <Pagination
            count={dataFavorites.totalPages}
            page={favoritesPage}
            onChange={handleChange}
          />
        </OptionButton>
      </div>
    );
}
