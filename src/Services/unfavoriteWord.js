import axios from "axios";

export const unfavoriteWord = async (word) => {
  let sucess = true;

  let url = `http://localhost:5000/entries/en/${word}/unfavorite`;
  await axios
    .delete(url)
    .then((response) => {})
    .catch((error) => {
      console.log(error.toJSON());
      sucess = false;
    });

  return sucess;
};
