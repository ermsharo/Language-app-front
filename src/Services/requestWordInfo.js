import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetWordInfo = (selectedWord, wordsRequests, setWordsRequests) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [word, setWord] = useState(selectedWord);

  useEffect(() => {
    const url = `http://localhost:5000/entries/en/${word}`;
    let requests = wordsRequests;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url, {
          headers: {
            "x-access-token": getToken(),
          },
        });

        setData(result.data["freeDict"]);
        requests[url] = result.data["freeDict"];
        setWordsRequests(requests);
      } catch (error) {
        setIsError(error.response.data);
      }

      setIsLoading(false);
    };
    console.log("words requests ->", wordsRequests, wordsRequests[url]);
    if (wordsRequests[url] !== undefined) {
      console.log("Já temos");
      setData(wordsRequests[url]);
      setIsError(false);
      setIsLoading(false);
    } else {
      fetchData();
    }

  }, [word]);

  return [{ data, isLoading, isError }, setWord];
};
