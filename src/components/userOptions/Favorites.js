import styled from "styled-components";
import Word from "./Word";
import { GetHistoryList } from "../../Services/requestHistory";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Loading from "../Loading/Loading";

export default function Favorites({ favorites, setFavorites, setSelectedWord }) {
  const WordListGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  `;

  const OptionButton = styled.div`
    padding: 32px;
    display: flex;
    justify-content: center;
  `;

  return (
    <div>
      {JSON.stringify(Object.keys(favorites))}
      <WordListGrid>
        {Object.entries(favorites) !== undefined &&
          Object.entries(favorites).map((item, index) => (
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
        {/* <Pagination
            count={data.totalPages}
            page={historyPage}
            onChange={handleChange}
          /> */}
      </OptionButton>
    </div>
  );
}
