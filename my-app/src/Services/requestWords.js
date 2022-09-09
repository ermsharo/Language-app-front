import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetWordList = (setWordList, wordList) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // getLastPage(wordList);

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

        setData(result.data);

        let wordListConcated = wordList.concat(result.data.result);
        setWordList(wordListConcated);
      } catch (error) {
        setIsError(error.response.data);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  return [{ data, isLoading, isError }, setPage];
};
