import Header from "../header/Header";
import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";
import InfiniteScroll from "react-infinite-scroll-component";

import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [selectedWord, setSelectedWord] = useState("");

  return (
    <>
      {" "}
      <Header />
      <BoardBox>
        <Grid>
          <WordInfoBox>
            <WordInfo
              selectedWord={selectedWord}
              setSelectedWord={setSelectedWord}
            />
          </WordInfoBox>
          <OptionsBox>
            <OptionsTabs />
          </OptionsBox>
        </Grid>
      </BoardBox>
    </>
  );
}
