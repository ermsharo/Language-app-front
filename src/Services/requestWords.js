import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetWordList = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/entries/en?&limit=15&page=${page}`;

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

      } catch (error) {
        setIsError(error.response.data);
      }

      setIsLoading(false);
    };

    fetchData();

  }, [page]);

  return [{ data, isLoading, isError }, setPage];
};
