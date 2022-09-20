import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WordInfoDrawer from "./WordInfoDrawer";
import { GetFavoritesList } from "../../Services/getFavorites";

const WordInfoBox = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    grid-column: 1/4;
  }
`;

const OptionsBox = styled.div`
  grid-column: 1/9;

  @media (min-width: 992px) {
    grid-column: 4/9;
  }
`;

const BoardBox = styled.div`
  padding-top: 32px;
`;

const WordInfoDrawerDisplay = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
`;

export default function Board() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordsRequests, setWordsRequests] = useState({});
  const [infoDrawerOpen, setInfoDrawerOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  let { tab } = useParams();

  return (
    <>
      <BoardBox>
        <Grid>
          <WordInfoBox>
            {selectedWord != null && (
              <WordInfo
                selectedWord={selectedWord}
                setSelectedWord={setSelectedWord}
                wordsRequests={wordsRequests}
                setWordsRequests={setWordsRequests}
              />
            )}
          </WordInfoBox>
          <OptionsBox>
            <OptionsTabs
              setSelectedWord={setSelectedWord}
              tab={tab}
              setInfoDrawerOpen={setInfoDrawerOpen}
            />
          </OptionsBox>
        </Grid>
        {isMobile && infoDrawerOpen && (
          <WordInfoDrawerDisplay>
            <WordInfoDrawer
              infoDrawerOpen={infoDrawerOpen}
              setInfoDrawerOpen={setInfoDrawerOpen}
              selectedWord={selectedWord}
              setSelectedWord={setSelectedWord}
              wordsRequests={wordsRequests}
              setWordsRequests={setWordsRequests}
            />
          </WordInfoDrawerDisplay>
        )}
      </BoardBox>
    </>
  );
}
