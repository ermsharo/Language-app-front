import styled from "styled-components";
import Word from "./Word";
import React, { useEffect, useState } from "react";

export default function Favorites({
  favorites,
  setFavorites,
  setSelectedWord,
  setInfoDrawerOpen,
}) {
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

  let filterValues = () => {
    const propertyNames = Object.keys(favorites);

    console.log(propertyNames);

    let valideValues = [];
    for (let i = 0; i < propertyNames.length; i++) {
      console.log(propertyNames[i]);
      if (favorites[propertyNames[i]]) valideValues.push(propertyNames[i]);
    }
    return valideValues;
  };

  const [favoriteList, setFavoriteList] = useState(filterValues(favorites));

  useEffect(() => {
    console.log("Favorites updates");
  }, [favoriteList, setFavoriteList]);

  return (
    <div>
      <WordListGrid>
        {favoriteList !== undefined &&
          favoriteList.map((item, index) => (
            <Word
              index={index}
              item={item}
              setSelectedWord={setSelectedWord}
              favorites={favorites}
              setFavorites={setFavorites}
              setFavoriteList={setFavoriteList}
              setInfoDrawerOpen={setInfoDrawerOpen}
            />
          ))}
      </WordListGrid>
      <OptionButton>
        {/* <Pagination
            count={data.totalPages}
            page={historyPage}
            onChange={handleChange}
          /> */}
      </OptionButton>
    </div>
  );
}
