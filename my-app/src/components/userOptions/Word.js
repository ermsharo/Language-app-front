import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const GenerateWordColor = (word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let colors = [
    "#FEF3E6",
    "#F8F3ED",
    "#FFF6E5",
    "#FCF7E8",
    "#F8F7ED",
    "#F3F3F2",
    "#FFFFE5",
    "#F5F9EC",
    "#F2FFE5",
    "#F2F4F0",
    "#EEF8EC",
    "#E5FFE5",
    "#EBFAEE",
    "#E8FDF1",
    "#EBFAF4",
    "#EFF5F4",
    "#F0F5F5",
    "#E5FFFF",
    "#E7F8FD",
    "#EDF4F7",
    "#F1F2F4",
    "#EEF2F6",
    "#E8EFFD",
    "#EFEFF5",
    "#EFEDF7",
    "#F4E5FF",
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
