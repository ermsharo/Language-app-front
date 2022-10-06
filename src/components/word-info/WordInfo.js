import styled from "styled-components";
import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { GetWordInfo } from "./../../Services/requestWordInfo";
import Feedback from "./../Feedback/FeedBack";
import { GenerateWordColor } from "./../../Styles/StyleFunctions";
import MeaningDisplay from "./MeaningsDisplay";
import {
  DarkFontColor,
  HeaderColor,
  LightFontColor,
} from "./../../Styles/StyleFunctions";

import Loading from "../Loading/Loading";

const WordDisplayBox = styled.div`
  background-color: ${HeaderColor};
  padding: 16px;
  color: ${LightFontColor};
`;

const WordDisplay = styled.div`
  width: 100%;
  text-align: center;
  padding: 32px 0px;
  font-family: "Roboto Slab", serif;
  color: ${DarkFontColor};
`;

const WordText = styled.div`
  width: 80%;
  margin: auto;
  font-size: 32px;
  padding: 16px;
`;

const FoneticText = styled.div`
  width: 80%;
  margin: auto;
  font-size: 24px;

  padding: 8px;
`;

const AudioDisplay = styled.div`
  width: 80%;
  margin: auto;
  font-size: 24px;
  padding: 16px;
`;

export default function WordInfo({
  selectedWord,
  wordsRequests,
  setWordsRequests,
}) {
  const [{ data, isLoading, isError }, doFetch] = GetWordInfo(
    selectedWord,
    wordsRequests,
    setWordsRequests
  );

  useEffect(() => {
    doFetch(selectedWord);
  }, [doFetch, selectedWord]);

  if (isError) {
    return (
      <>
        <Feedback
          status="word dont find"
          success={false}
          display="word dont find"
          showThumbs={false}
        />
      </>
    );
  }
  if (isLoading) return <Loading />;

  if (data) {
    let wordObj = {};
    let ourKeys = ["word", "audio", "text", "meanings"];
    const getValuesByKey = (obj) => {
      let objToKeys = Object.keys(obj);
      let finalObject = {};

      for (let i = 0; i < objToKeys.length; i++) {
        if (obj[objToKeys[i]]) {
          for (let j = 0; j < ourKeys.length; j++) {
            if (objToKeys[i] === ourKeys[j]) {
              wordObj[objToKeys[i]] = obj[objToKeys[i]];
            }
          }
          finalObject[objToKeys[i]] = obj[objToKeys[i]];
          if (typeof obj[objToKeys[i]] == "object") {
            finalObject[objToKeys[i]] = getValuesByKey(obj[objToKeys[i]]);
          }
        }
      }
      return finalObject;
    };

    getValuesByKey(data);

    return (
      <WordDisplayBox>
        <WordDisplay
          style={{ backgroundColor: GenerateWordColor(wordObj?.word) }}
        >
          <WordText>{wordObj?.word}</WordText>
          <FoneticText>{wordObj?.text}</FoneticText>
        </WordDisplay>
        <AudioDisplay>
          {wordObj?.audio && (
            <ReactAudioPlayer
              src={wordObj?.audio}
              autoPlay={false}
              controls
              style={{ width: "100%" }}
            />
          )}
        </AudioDisplay>
        <MeaningDisplay Meanings={wordObj?.meanings} />
      </WordDisplayBox>
    );
  }
}
