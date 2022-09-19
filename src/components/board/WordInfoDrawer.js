import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import React from "react";
import { HeaderColor } from "./../../Styles/StyleFunctions";
import WordInfo from "./../word-info/WordInfo";
const DrawerBox = styled.div`
  background-color: ${HeaderColor};
  width: 100%;
  height: 100vh;
`;

export default function wordInfoDrawer(
  infoDrawerOpen,
  setInfoDrawerOpen,
  selectedWord,
  setSelectedWord,
  wordsRequests,
  setWordsRequests
) {
  return (
    <div>
      <Drawer open={infoDrawerOpen} hideBackdrop={false}>
        <DrawerBox>
          {selectedWord != null && (
            <WordInfo
              selectedWord={selectedWord}
              setSelectedWord={setSelectedWord}
              wordsRequests={wordsRequests}
              setWordsRequests={setWordsRequests}
            />
          )}
          <div
            onClick={() => {
              setInfoDrawerOpen(false);
            }}
          >
            Close this{" "}
          </div>
        </DrawerBox>
      </Drawer>
    </div>
  );
}
