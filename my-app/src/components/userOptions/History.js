import styled from "styled-components";
import Word from "./Word";
import { GetHistoryList } from "../../Services/requestHistory";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";

const WordListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 6px;
`;

const OptionButton = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
`;
export default function History({
  historyPage,
  setHistorypage,
  setSelectedWord,
  favorites,
  setFavorites,
}) {
  const navigate = useNavigate();

  const fetchMoreData = () => { };

  const [{ data, isLoading, isError }, changePage] = GetHistoryList(
    favorites,
    setFavorites
  );

  useEffect(() => {
    changePage(historyPage);
  }, [historyPage]);

  const handleChange = (event, value) => {
    setFavorites(value);
  };

  if (isError) {
    if (isError.auth === false) navigate("/login");
    return <div>Something went wrong ...</div>;
  }
  if (isLoading) return <div>Loading ...</div>;
  if (data)
    return (
      <div>
        <InfiniteScroll
          dataLength="10"
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        ></InfiniteScroll>

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
            page={historyPage}
            onChange={handleChange}
          />
        </OptionButton>
      </div>
    );
}
