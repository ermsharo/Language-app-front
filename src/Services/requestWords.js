import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetWordList = (setWordList, wordList, favorites, setFavorites) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const verifyPageAlredyRequest = (wordList, page) => {
    // console.log("here stay ->",wordList, page);
    for (let i = 0; i < wordList.length; i++) {
      console.log("verify here index ->", i, page, wordList[i].page);
      if (wordList[i].page === page) {
        console.log("verify here", page, wordList[i].page);
        return wordList[i];
      }
    }
    return false;
  };

  const initializeFavorites = (item, word_id, isFavorited) => {
    let requestObj = {
      word: item,
      word_id: word_id,
      isFavorited: isFavorited,
    };
    console.log(requestObj);
    setFavorites((favorites) => [requestObj, ...favorites]);
  };

  const createWordFavoriteStatus = (wordsArray) => {
    console.log("wordsArray", wordsArray);
    for (let i = 0; i < wordsArray.length; i++) {
      console.log("->", wordsArray[i]);
      initializeFavorites(wordsArray[i], 0, false);
      console.log("result ->", favorites);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `http://localhost:5000/entries/en?&limit=15&page=${page}`,
          {
            headers: {
              "x-access-token": getToken(),
            },
          }
        );
        setWordList((wordList) => [result.data, ...wordList]);
        setData(result.data);
        createWordFavoriteStatus(result.data.results);
      } catch (error) {
        setIsError(error.response.data);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return [{ data, isLoading, isError }, setPage];
};
