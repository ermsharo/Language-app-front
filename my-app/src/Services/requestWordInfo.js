import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

const verifyObjs = (wordRequests, word) => {
  console.log("word requests here", wordRequests);
  for (let i = 0; i < wordRequests.length; i++) {
    if (wordRequests[i].word === word) {
      return wordRequests[i].data;
    }
  }
  return false;
};

export const GetWordInfo = (
  selectedWord,
  setWordsRequested,
  wordsRequested
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [word, setWord] = useState(selectedWord);

  useEffect(() => {
    const fetchData = async () => {
      let isThisWordCached = verifyObjs(wordsRequested, selectedWord);
      if (isThisWordCached) {
        console.log(
          `is this word cached -> : ${selectedWord}`,
          isThisWordCached
        );
        setIsError(false);
        setIsLoading(false);
        setData(isThisWordCached);
      } else {
        setIsError(false);
        setIsLoading(true);
        try {
          const url = `http://localhost:5000/entries/en/${word}`;
          const result = await axios(url, {
            headers: {
              "x-access-token": getToken(),
            },
          });

          //console.log("words requested", wordsRequested)
          setData(result.data["freeDict"]);
          console.log("Result from word", result.data);
          let requestObj = { word: selectedWord, data: data };
          console.log("Reqest obj", requestObj);

          setWordsRequested((wordsRequested) => [
            requestObj,
            ...wordsRequested,
          ]);

          //Now we just
        } catch (error) {
          setIsError(error.response.data);
          console.log("error ->", error.response.data);
        }

        setIsLoading(false);
      }
    };

    fetchData();
  }, [word]);

  return [{ data, isLoading, isError }, setWord];
};
