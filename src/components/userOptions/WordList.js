import styled from "styled-components";
import Word from "./Word";
import { GetWordList } from "../../Services/requestWords";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Loading from "../Loading/Loading";

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
  page,
  setPage,
  favorites,
  setFavorites,
  cachedWordPages,
  setcachedWordPages,
}) {
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [{ data, isLoading, isError }, changePage] = GetWordList(
    cachedWordPages,
    setcachedWordPages
  );

  useEffect(() => {
    changePage(page);
  }, [changePage, page, favorites]);

  if (isError) {
    if (isError.auth === false) navigate("/login");
    return <div>Something went wrong ...</div>;
  }
  if (isLoading) return <Loading />;

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
