import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";
import React, { useState } from "react";

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

  return (
    <>
      <BoardBox>
        <Grid>
          <WordInfoBox>
            {selectedWord != null && (
              <WordInfo
                selectedWord={selectedWord}
                setSelectedWord={setSelectedWord}
              />
            )}
          </WordInfoBox>
          <OptionsBox>
            <OptionsTabs setSelectedWord={setSelectedWord} />
          </OptionsBox>
        </Grid>
      </BoardBox>
    </>
  );
}
