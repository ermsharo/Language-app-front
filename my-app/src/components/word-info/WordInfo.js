/* eslint-disable no-unused-vars */
import styled from "styled-components";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ReactAudioPlayer from "react-audio-player";

export default function WordInfo({ selectedWord, setSelectedWord }) {
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

  return (
    <div>
      <WordDisplay>
        <WordText>{selectedWord}</WordText>
        <FoneticText>he . lo</FoneticText>
      </WordDisplay>
      <AudioDisplay>
        {" "}
        <ReactAudioPlayer
          src="my_audio_file.ogg"
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
