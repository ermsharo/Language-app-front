import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import WordInfoDrawer from "./WordInfoDrawer";

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

export default function Board() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordsRequests, setWordsRequests] = useState({});
  const [infoDrawerOpen, setInfoDrawerOpen] = useState(false);

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

          <WordInfoDrawer
            infoDrawerOpen={infoDrawerOpen}
            setInfoDrawerOpen={setInfoDrawerOpen}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
            wordsRequests={wordsRequests}
            setWordsRequests={setWordsRequests}
          />

      </BoardBox>
    </>
  );
}
