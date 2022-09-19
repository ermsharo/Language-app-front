import styled from "styled-components";
import Word from "./Word";
import React, { useEffect } from "react";

export default function Favorites({
  favorites,
  setFavorites,
  setSelectedWord,
}) {
  const WordListGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
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

 

  return (
    <div>

      <WordListGrid>
        {filterValues() !== undefined &&
          filterValues().map((item, index) => (
            <Word
              index={index}
              item={item}
              setSelectedWord={setSelectedWord}
              favorites={favorites}
              setFavorites={setFavorites}
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
