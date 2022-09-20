import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const unfavoriteWord = async (word) => {
  let sucess = true;

  let url = `http://localhost:5000/entries/en/${word}/unfavorite`;
  await axios
    .delete(url, {headers: {
      "x-access-token": getToken(),
    }})
    .then((response) => {})
    .catch((error) => {
      console.log(error.toJSON());
      sucess = false;
    });

  return sucess;
};
