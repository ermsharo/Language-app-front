import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { GenerateWordColor } from "./../../Styles/StyleFunctions";
import { DarkFontColor } from "./../../Styles/StyleFunctions";
import { favoriteWord } from "./../../Services/favoriteWord";
import { unfavoriteWord } from "./../../Services/unfavoriteWord";

const WordBox = styled.div`
  padding: 16px;

  text-align: center;
  -webkit-box-shadow: 3px 13px 14px -5px rgba(0, 0, 0, 0.19);
  box-shadow: 3px 13px 14px -5px rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: space-between;
  font-family: "Roboto Slab", serif;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-transform: capitalize;
    font-weight: 400;
    color: ${DarkFontColor};
  }
`;

const FirstButton = styled.button`
  width: 100%;
`;

const SecoundButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  width: 40px;
`;

let filterValues = (values) => {
  const propertyNames = Object.keys(values);

  console.log(propertyNames);

  let valideValues = [];
  for (let i = 0; i < propertyNames.length; i++) {
    console.log(propertyNames[i]);
    if (values[propertyNames[i]]) valideValues.push(propertyNames[i]);
  }
  return valideValues;
};

export default function Word({
  item,
  index,
  setSelectedWord,
  favorites,
  setFavorites,
  setFavoriteList,
  setInfoDrawerOpen,
}) {
  const changeWordFavoritedStatus = async (word, status) => {
    let ref = favorites;
    ref[word] = status;
    setFavorites(ref);
    setIsFavorited(status);

    if (status) {
      //console.log("Add to favorites word", word);
      //let response = await favoriteWord(word);
      /// console.log("Add to favorites word", response);
    } else {
      await unfavoriteWord(word);
    }

    setFavoriteList(filterValues(ref));
  };

  const elementIsFavorited = (word) => {
    if (favorites[word] !== undefined) {
      if (favorites[word]) return true;
      return false;
    }
    return false;
  };

  const [isFavorited, setIsFavorited] = useState(elementIsFavorited(item));

  return (
    <>
      <WordBox style={{ backgroundColor: GenerateWordColor(item) }}>
        <FirstButton
          onClick={() => {
            setSelectedWord(item);
            setInfoDrawerOpen(true);
          }}
        >
          {item}
        </FirstButton>
        <SecoundButton>
          {isFavorited ? (
            <div
              onClick={() => {
                changeWordFavoritedStatus(item, false);
              }}
            >
              <AiFillStar />
            </div>
          ) : (
            <div
              onClick={() => {
                changeWordFavoritedStatus(item, true);
              }}
            >
              {" "}
              <AiOutlineStar />
            </div>
          )}
        </SecoundButton>
      </WordBox>
    </>
  );
}
