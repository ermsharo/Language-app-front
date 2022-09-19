import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetWordList = (cachedWordPages, setcachedWordPages) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/entries/en?&limit=15&page=${page}`;
    let requests = cachedWordPages;
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
        requests[url] = result.data;
        setcachedWordPages(requests);
      } catch (error) {
        setIsError(error.response.data);
      }

      setIsLoading(false);
    };

    if (cachedWordPages[url] !== undefined) {
      console.log("Já temos");
      setData(cachedWordPages[url]);
      setIsError(false);
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, [page]);

  return [{ data, isLoading, isError }, setPage];
};
