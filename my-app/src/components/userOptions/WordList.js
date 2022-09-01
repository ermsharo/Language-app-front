import styled from "styled-components";
import Word from "./Word";
import { GetWordList } from "../../Services/requestWords";
import InfiniteScroll from "react-infinite-scroll-component";
export default function WordList() {
  const WordListGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 6px;
  `;

  const fetchMoreData = () => {};

  const [{ data, isLoading, isError }, doFetch] = GetWordList(
    "http://localhost:5000/entries/en?&limit=15",
    { hits: [] }
  );

  if (isError) return <div>Something went wrong ...</div>;
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
          {data.results != undefined &&
            data.results.map((item, index) => (
              <Word index={index} item={item} />
            ))}
        </WordListGrid>
      </div>
    );
}
