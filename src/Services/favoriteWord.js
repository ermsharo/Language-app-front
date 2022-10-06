import axios from "axios";
import { getToken } from "../Services/getLoginStatus";

export const favoriteWord = async (word) => {
  let sucess = true;

  let url = `http://localhost:5000/entries/en/${word}/favorite`;
  await axios
    .post(
      url,
      {},
      {
        headers: {
          "x-access-token": getToken(),
        },
      }
    )
    .then((response) => {})
    .catch((error) => {
      console.log(error.toJSON());
      sucess = false;
    });

  return sucess;
};
