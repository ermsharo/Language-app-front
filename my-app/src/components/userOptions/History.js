import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Word from "./Word";
import { GetHistoryList } from "../../Services/requestHistory";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

const WordListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 6px;
`;

export default function History({ setSelectedWord }) {
  const navigate = useNavigate();

  const fetchMoreData = () => {};

  const [{ data, isLoading, isError }, doFetch] = GetHistoryList(
    "http://localhost:5000/user/me/history",
    { hits: [] }
  );

  if (isError) {
    console.log("is error from comp ->", isError);
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
              <Word index={index} item={item} />
            ))}
        </WordListGrid>
      </div>
    );
}
