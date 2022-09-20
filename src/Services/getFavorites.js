import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/getLoginStatus";
import {getUserInfo} from "../Services/getLoginStatus";

export const GetFavoritesList = (favorites, setFavorites) => {
  const [dataFavorites, setDataFavorites] = useState(null);
  const [pageFavorites, setPageFavorites] = useState(0);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
  const [isErrorFavorites, setIsErrorFavorites] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsErrorFavorites(false);
      setIsLoadingFavorites(true);
      try {
        const result = await axios(
          `http://localhost:5000/user/me/favorites?&limit=15&page=${pageFavorites}`,
          {
            headers: {
              "x-access-token": getToken(),
            },
            data: {
              userId: getUserInfo().id,
            }
          }
        );

        setDataFavorites(result.data);
        if (result.data) {
          let ref = favorites;
          for (let i = 0; i < result.data.results; i++) {
            ref[result.data.results[i]] = true;
            setFavorites(ref);
            console.log("Favorites", favorites);
          }
        }
      } catch (error) {
        setIsErrorFavorites(error.response.data);
      }

      setIsLoadingFavorites(false);
    };

    fetchData();
  }, [pageFavorites]);

  return [
    { dataFavorites, isLoadingFavorites, isErrorFavorites },
    setPageFavorites,
  ];
};
