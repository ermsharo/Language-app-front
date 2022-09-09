import styled from "styled-components";
import Word from "./Word";
import { GetWordList } from "../../Services/requestWords";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";

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
}) {
  const navigate = useNavigate(); //

  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchMoreData = () => {};

  const [{ data, isLoading, isError }, changePage] = GetWordList(
    setwordList,
    wordList
  );

  useEffect(() => {
    changePage(page);
  }, [page]);

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
