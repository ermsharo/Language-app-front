import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect } from "react";
import { GenerateWordColor } from "./../../Styles/StyleFunctions";
import {
  HeaderColor,
  DarkFontColor,
  LightFontColor,
  BackgroundColor,
  SecundaryBackgroundColor,
} from "./../../Styles/StyleFunctions";

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

export default function Word({ item, index, setSelectedWord }) {
  const elementIsFavorited = (word) => {
    return false;

    // if (result !== undefined) {
    //   return result.isFavorited;
    // }
    // return false;
  };

  useEffect(() => {
    //console.log("Favorites", favorites);
    // console.log("favorites", favorites);
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
            <AiFillStar onClick={() => {}} />
          ) : (
            <AiOutlineStar onClick={() => {}} />
          )}
        </SecoundButton>
      </WordBox>
    </>
  );
}
