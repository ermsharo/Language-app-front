import styled from "styled-components";
import Word from "./Word";
import { GetWordList } from "../../Services/requestWords";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Loading from "../Loading/Loading";

const WordListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const OptionButton = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const TabSecTitle = styled.div`
  text-align: left;
  font-size: 32px;
  text-transform: capitalize;
  padding-bottom: 32px;
  font-weight: 400;
`;

export default function WordList({
  setSelectedWord,
  page,
  setPage,
  favorites,
  setFavorites,
  setInfoDrawerOpen,
  refreshComponents,
  refreshComp,
}) {
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [{ data, isLoading, isError }, changePage, setRefresh] = GetWordList();

  useEffect(() => {
    console.log("update word list");
    changePage(page);
    setRefresh(refreshComp);
  }, [changePage, page, refreshComp]);

  if (isError) {
    if (isError.auth === false) navigate("/login");
    return <div>Something went wrong ...</div>;
  }
  if (isLoading) return <Loading />;

  if (data) {
    return (
      <div>
        <TabSecTitle>words</TabSecTitle>
        <WordListGrid>
          {data.results !== undefined &&
            data.results.map((item, index) => (
              <Word
                item={item.word}
                setSelectedWord={setSelectedWord}
                setInfoDrawerOpen={setInfoDrawerOpen}
                isFavorite={item.isFavorite}
                refreshComponents={refreshComponents}
                refreshComp={refreshComp}
              />
            ))}
        </WordListGrid>
        {data.totalPages !== 0 && (
          <OptionButton>
            <Pagination
              count={data.totalPages}
              page={page}
              onChange={handleChange}
            />
          </OptionButton>
        )}
      </div>
    );
  }
}
