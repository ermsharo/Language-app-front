/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ReactAudioPlayer from "react-audio-player";
import { GetWordInfo } from "./../../Services/requestWordInfo";
import Feedback from "./../Feedback/FeedBack";

const WordDisplay = styled.div`
  width: 100%;
  background-color: lightblue;
  text-align: center;
  padding: 32px 0px;
  font-family: "Helmida", sans-serif;
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

const ButtonDisplay = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
`;

const MeaningDisplay = styled.div`
  padding: 16px;
`;

const MeaningTitle = styled.div`
  font-size: 24px;
  padding: 8px;
`;

const MeaningText = styled.div`
  padding: 8px;
`;
export default function WordInfo({
  selectedWord,
  setSelectedWord,
  wordsRequested,
  setWordsRequested,
}) {
  const [{ data, isLoading, isError }, doFetch] = GetWordInfo(
    selectedWord,
    setWordsRequested,
    wordsRequested
  );
  useEffect(() => {
    // Request the info about the word
    doFetch(selectedWord);
  }, [selectedWord]);

  if (isError) {
    return (
      <>
        <Feedback
          status="word dont find"
          success={false}
          display="word dont find"
        />
      </>
    );
  }
  if (isLoading) return <div>Loading ...</div>;

  if (data) {
    //Insert this word in our history

    return (
      <div>
        <WordDisplay>
          <WordText>{data[0]?.word}</WordText>
          <FoneticText>{data[0]?.phonetics[1]?.text}</FoneticText>
        </WordDisplay>
        <AudioDisplay>
          {" "}
          <ReactAudioPlayer
            src={data[0]?.phonetics[0]?.audio}
            autoPlay
            controls
            style={{ width: "100%" }}
          />
        </AudioDisplay>
        <MeaningDisplay>
          <MeaningTitle>Meanings</MeaningTitle>
          <MeaningText>lorem ipsun </MeaningText>
        </MeaningDisplay>
        <ButtonDisplay>
          <Button fullWidth variant="outlined">
            Last
          </Button>
          <Button variant="outlined" fullWidth>
            Next
          </Button>
        </ButtonDisplay>
      </div>
    );
  }
}
