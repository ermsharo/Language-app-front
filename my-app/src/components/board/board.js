import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";
import React, { useState } from "react";
import {
  HeaderColor,
  DarkFontColor,
  LightFontColor,
  BackgroundColor,
  SecundaryBackgroundColor,
} from "./../../Styles/StyleFunctions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


const WordInfoBox = styled.div`
  grid-column: 1/3;
`;

const OptionsBox = styled.div`
  grid-column: 3/8;
`;

const BoardBox = styled.div`
  padding-top: 32px;
  background-color: ${BackgroundColor};
  color: white;
  min-height: 100%;
  font-family: "Varela Round", sans-serif !important;
  font-weight: 400;
  color: ${DarkFontColor};
`;

export default function Board() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordsRequested, setWordsRequested] = useState([]);

  let { tab } = useParams();

  return (
    <>
      {tab}
      <BoardBox>
        <Grid>
          <WordInfoBox>
            {selectedWord != null && (
              <WordInfo
                selectedWord={selectedWord}
                setSelectedWord={setSelectedWord}
                wordsRequested={wordsRequested}
                setWordsRequested={setWordsRequested}
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
