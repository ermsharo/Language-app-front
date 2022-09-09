import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

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

export default function Word({ item, index, setSelectedWord }) {
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
          <AiFillStar /> <AiOutlineStar />
        </SecoundButton>
      </WordBox>
    </>
  );
}
