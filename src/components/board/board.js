import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const WordInfoBox = styled.div`
  grid-column: 1/3;
`;

const OptionsBox = styled.div`
  grid-column: 3/8;
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
      </BoardBox>
    </>
  );
}
