import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const WordInfoBox = styled.div`
  display: none;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    display: block;
    grid-column: 1/4;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }

  @media (min-width: 1300px) {
  }
`;

const OptionsBox = styled.div`
  grid-column: 1/9;

  @media (min-width: 576px) {
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-column: 4/9;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }

  @media (min-width: 1300px) {
  }
`;

const BoardBox = styled.div`
  padding-top: 32px;
`;

export default function Board() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordsRequests, setWordsRequests] = useState({});

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
            <OptionsTabs setSelectedWord={setSelectedWord} tab={tab} />
          </OptionsBox>
        </Grid>
        <></>
      </BoardBox>
    </>
  );
}
