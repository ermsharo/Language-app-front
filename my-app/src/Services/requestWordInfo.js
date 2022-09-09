import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

const verifyObjs = (wordRequests, word) => {
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

          setData(result.data["freeDict"]);

          let requestObj = { word: selectedWord, data: data };

          setWordsRequested((wordsRequested) => [
            requestObj,
            ...wordsRequested,
          ]);

          //Now we just
        } catch (error) {
          setIsError(error.response.data);
        }

        setIsLoading(false);
      }
    };

    fetchData();
  }, [word]);

  return [{ data, isLoading, isError }, setWord];
};
