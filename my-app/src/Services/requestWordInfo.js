import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetWordInfo = (initialUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(initialUrl);

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

        setData(result.data["freeDict"]);
        console.log("Result from word", result.data);
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
