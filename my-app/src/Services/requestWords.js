import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetWordList = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
        console.log(result.data);
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
