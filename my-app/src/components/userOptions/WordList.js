import styled from "styled-components";
import Word from "./Word";
import { GetWordList } from "../../Services/requestWords";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import {
  HeaderColor,
  DarkFontColor,
  LightFontColor,
  BackgroundColor,
  SecundaryBackgroundColor,
} from "./../../Styles/StyleFunctions";

const WordListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

const OptionButton = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
`;

export default function WordList({
  setSelectedWord,
  wordList,
  setwordList,
  page,
  setPage,
  favorites,
  setFavorites,
}) {
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const initializeFavorites = (item, word_id, isFavorited) => {
    let requestObj = {
      word: item,
      word_id: word_id,
      isFavorited: isFavorited,
    };
    console.log("favorites", favorites);

    setFavorites((favorites) => [requestObj, ...favorites]);
  };

  const [{ data, isLoading, isError }, changePage] = GetWordList(
    setwordList,
    wordList,
    favorites,
    setFavorites
  );

  useEffect(() => {
    changePage(page);
  }, [changePage, page, favorites]);

  if (isError) {
    if (isError.auth === false) navigate("/login");
    return <div>Something went wrong ...</div>;
  }
  if (isLoading) return <div>Loading ...</div>;

  if (data) {
    return (
      <div>
        <WordListGrid>
          {data.results !== undefined &&
            data.results.map((item, index) => (
              <Word
                index={index}
                item={item}
                setSelectedWord={setSelectedWord}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
        </WordListGrid>
        <OptionButton>
          <Pagination
            count={data.totalPages}
            page={page}
            onChange={handleChange}
          />
        </OptionButton>
      </div>
    );
  }
}
