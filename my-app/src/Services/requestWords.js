import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

const getLastPage = (wordList) => {
  let lastElementForWordList = wordList.slice(-1);
  console.log("Last elem", lastElementForWordList);
  console.log("Last page", lastElementForWordList.page);
};

export const GetWordList = (initialUrl, setWordList, wordList) => {
  const [data, setData] = useState(wordList);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // getLastPage(wordList);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url, {
          headers: {
            "x-access-token": getToken(),
          },
        });

        setData(result.data);
        console.log("Nosso modelo de dados esta aqui", result.data);
      } catch (error) {
        setIsError(error.response.data);
        console.log("error ->", error.response.data);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};
