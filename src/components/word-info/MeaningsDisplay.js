/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { DarkFontColor, HeaderColor } from "./../../Styles/StyleFunctions";

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

const ButtonDisplay = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    background-color: ${HeaderColor};
    border-radius: 20px;
    margin-top: 16px;

    &:hover {
      background-color: ${HeaderColor};
      opacity: 0.9;
    }
  }
`;

const ButtonEnable = styled.div`

    button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    background-color: ${HeaderColor};
    border-radius: 20px;
    margin-top: 16px;

    &:hover {
      background-color: ${HeaderColor};
      opacity: 0.9;
    }
  
  }
`;

const ButtonDisable = styled.div`
   button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    background-color: darkgray;
    border-radius: 20px;
    margin-top: 16px;

    &:hover {
      background-color: darkgray;
      opacity: 0.9;
    }

  }
`;

const MeaningDisplay = styled.div`
  padding: 16px;
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
`;

const MeaningTitle = styled.div`
  font-size: 24px;
  padding: 8px;
`;

const MeaningSubTitle = styled.div`
  font-size: 24px;
  padding: 8px;
`;

const MeaningText = styled.div`
  padding: 8px;
`;

function Meaning({ meaning }) {
  let MeaningObj = {};
  let ourKeys = ["word", "audio", "text", "meanings"];
  const getValuesByKey = (obj) => {
    let objToKeys = Object.keys(obj);
    let finalObject = {};

    for (let i = 0; i < objToKeys.length; i++) {
      if (obj[objToKeys[i]]) {
        for (let j = 0; j < ourKeys.length; j++) {
          if (objToKeys[i] === ourKeys[j]) {
            MeaningObj[objToKeys[i]] = obj[objToKeys[i]];
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

  return (
    <div>
      {" "}
      {JSON.stringify(meaning)}
      {meaning?.partOfSpeech && (
        <>
          {" "}
          <MeaningSubTitle>Part of speech</MeaningSubTitle>
          <MeaningText>{meaning?.partOfSpeech} </MeaningText>
        </>
      )}
      {/* {(meaning?.definitions) && (<>


                {meaning?.definitions.map((item, index) => (<>
                    <MeaningSubTitle>Definition :</MeaningSubTitle>
                    <MeaningText>{item?.definition}</MeaningText>
                    <MeaningSubTitle>Example</MeaningSubTitle>
                    <MeaningText>{item?.example}</MeaningText>
                </>

                ))}
            </>

            )} */}
    </div>
  );
}

export default function Meanings({ Meanings }) {
  const [selectedWord, setSelectedWord] = useState(0);

  //getValuesByKey(data);

  const previousExist = () => {
    console.log(" selected index ->",selectedWord);
    if (selectedWord === 0) return false;
    return true;
  };

  const nextExist = () => {
    if (selectedWord === Meanings.length-1) return false;
    return true;
  };

  const previousMeaning = () => {
    setSelectedWord(selectedWord - 1);
  };

  const nextMeaning = () => {
    setSelectedWord(selectedWord + 1);
  };

  return (
    <div>
      <MeaningDisplay>
        <MeaningTitle>Meanings</MeaningTitle>

        <Meaning meaning={Meanings[selectedWord]} />
      </MeaningDisplay>

      {Meanings.length >= 1 && (
        <ButtonDisplay>
          {previousExist() ? (
            <ButtonEnable>
              <Button onClick={() => {previousMeaning()}} fullWidth variant="contained">
                Last
              </Button>
            </ButtonEnable>
          ) : (
            <ButtonDisable>
              <Button  fullWidth variant="contained">
                Last
              </Button>
            </ButtonDisable>
          )}

          {nextExist() ? (
            <ButtonEnable>
              <Button
                onClick={() => {
                    nextMeaning();
                }}
                fullWidth
                variant="contained"
              >
                Next
              </Button>
            </ButtonEnable>
          ) : (
            <ButtonDisable>
              <Button
                fullWidth
                variant="contained"
              >
                Next
              </Button>
            </ButtonDisable>
          )}
        </ButtonDisplay>
      )}
    </div>
  );
}
