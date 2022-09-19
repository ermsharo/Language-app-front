import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import React from "react";
import { HeaderColor } from "./../../Styles/StyleFunctions";
import WordInfo from "./../word-info/WordInfo";
import { AiOutlineArrowLeft } from "react-icons/ai";
const DrawerBox = styled.div`
  background-color: ${HeaderColor};
  width: 100vw;
  height: 100vh;
`;

const CloseButton = styled.div`
  background-color: ${HeaderColor};
  font-family: "Roboto Slab", serif;

  cursor: pointer;
  color: white;
  font-size: 32px;
  text-align: right;
  padding: 32px;
  line-height: 32px;
  display: flex;
`;

const CloseButtonLine = styled.div`
  display: flex;
  justify-content: end;
`;

export default function wordInfoDrawer({
  infoDrawerOpen,
  setInfoDrawerOpen,
  selectedWord,
  setSelectedWord,
  wordsRequests,
  setWordsRequests,
}) {
  return (
    <Drawer open={infoDrawerOpen} hideBackdrop={true}>
      <DrawerBox>
        <CloseButtonLine>
          <CloseButton
            onClick={() => {
              setInfoDrawerOpen(false);
            }}
          >
            <AiOutlineArrowLeft />
            &nbsp; Comeback
          </CloseButton>
        </CloseButtonLine>
        {selectedWord != null && (
          <WordInfo
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
            wordsRequests={wordsRequests}
            setWordsRequests={setWordsRequests}
          />
        )}
      </DrawerBox>
    </Drawer>
  );
}
