import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect } from "react";

const GenerateWordColor = (word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let colors = [
    "#DCFFDE",
    "#BDEEDF",
    "#FFBCCD",
    "#FDFCDD",
    "#DECEDF",
    "#FDDDCB",
    "#FFFDEE",
    "#CBDDEC",
    "#EBFCFB",
    "#EFEFBD",
    "#DFBDFE",
    "#CDFEDF",
    "#BBDEFE",
    "#DEDCDF",
    "#BEFDBC",
    "#DFCDEE",
    "#BCFBEC",
    "#ECFEFD",
    "#EDDCBF",
    "#ECFEFE",
    "#BFDDFE",
    "#EEFFCB",
    "#FBEDCD",
    "#BEFDFC",
    "#CCDBEB",
    "#BDCECD",
  ];

  return colors[alphabet.indexOf(word[0])];
};

const WordBox = styled.div`
  padding: 8px;
  border: 1px solid black;
  text-align: center;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
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

export default function Word({
  item,
  index,
  setSelectedWord,
  favorites,
  setFavorites,
}) {
  const favoriteStruct = (item, word_id, isFavorited) => {
    return {
      word: item,
      word_id: word_id,
      isFavorited: isFavorited,
    };
  };

  const elementIsFavorited = (word) => {
    const result = favorites.find((favs) => favs.word === word);

    if (result !== undefined) {
      return result.isFavorited;
    }
    return false;
  };

  const changeFavoriteWordArray = (array, word, isFavorited) => {
    const newArr = array.map((favObj) => {
      if (favObj.word === word) {
        return { ...favObj, isFavorited: isFavorited };
      }
      return favObj;
    });
    console.log("NEW ARRAY ->", newArr);
    return newArr;
  };

  useEffect(() => {
    const initializeFavorites = (item, word_id, isFavorited) => {


      console.log(item);

    };
    initializeFavorites(item, 1, false);
   // console.log("favorites", favorites)
  }, [item]);

  return (
    <>
      <WordBox style={{ backgroundColor: GenerateWordColor(item) }}>
        <FirstButton
          onClick={() => {
            setSelectedWord(item);
          }}
        >
          {item}
        </FirstButton>
        <SecoundButton>
          {elementIsFavorited(item) ? (
            <AiFillStar
              onClick={() => {
                changeFavoriteWordArray(favorites, item, false);
              }}
            />
          ) : (
            <AiOutlineStar
              onClick={() => {
                changeFavoriteWordArray(favorites, item, true);
              }}
            />
          )}
        </SecoundButton>
      </WordBox>
    </>
  );
}
