import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const GetFavoritesList = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `http://localhost:5000/user/me/favorites?&limit=15&page=${page}`,
          {
            headers: {
              "x-access-token": getToken(),
            },
          }
        );

        setData(result.data);
      } catch (error) {
        setIsError(error.response.data);
      }

      setIsLoading(false);
    };

    fetchData();
    console.log("data ->", data);
  }, [page]);

  return [{ data, isLoading, isError }, setPage];
};
