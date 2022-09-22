import styled from "styled-components";
import Word from "./Word";
import { GetHistoryList } from "../../Services/requestHistory";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
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
export default function History({
  historyPage,
  setHistorypage,
  setSelectedWord,
  setInfoDrawerOpen,
  refreshComponents,
  refreshComp,
}) {
  const navigate = useNavigate();

  const [{ data, isLoading, isError }, changePage, setRefresh] = GetHistoryList();

  useEffect(() => {
    changePage(historyPage);
    setRefresh(refreshComp);
  }, [historyPage, changePage, refreshComp, setRefresh]);

  const handleChange = (event, value) => {
    setHistorypage(value);
  };

  if (isError) {
    if (isError.auth === false) navigate("/login");
    return <div>Something went wrong ...</div>;
  }
  if (isLoading) return <Loading />;
  if (data)
    return (
      <div>
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
        {(data.totalPages !== 0) && (<OptionButton>
          <Pagination
            count={data.totalPages}
            page={historyPage}
            onChange={handleChange}
          />
        </OptionButton>)}

      </div>
    );
}
