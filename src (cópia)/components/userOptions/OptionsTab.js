import React, { useState } from "react";
import History from "./History";
import Favorites from "./Favorites";
import WordList from "./WordList";
import styled from "styled-components";
import Tab from "./Tab";

const TabsStyle = styled.div`
  color: white;
`;

const TabsBox = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;

const WordListsStructure = styled.div`
  background-color: #fbfbf8;
  padding: 32px;
  padding-top: 64px;
`;
export default function UserOptions({
  setSelectedWord,
  tab,
  setInfoDrawerOpen,
}) {
  const [favorites, setFavorites] = useState({});
  const [cachedWordPages, setcachedWordPages] = useState({});

  let tables = ["words", "history", "favorites"];

  const verifyTable = (tab) => {
    let index = tables.indexOf(tab);
    if (index === -1) return 0;
    return index;
  };
  //Page from words
  const [page, setPage] = useState(0);
  //Page from history
  const [historyPage, setHistorypage] = useState(0);
  //page from favorites
  const [favoritesPage, setFavoritespage] = useState(0);

  return (
    <>
      <TabsStyle>
        <TabsBox>
          <Tab isSelected={verifyTable(tab) === 0} content={tables[0]} />
          <Tab isSelected={verifyTable(tab) === 1} content={tables[1]} />
          <Tab isSelected={verifyTable(tab) === 2} content={tables[2]} />
        </TabsBox>
      </TabsStyle>
      <WordListsStructure>
        {verifyTable(tab) === 0 && (
          <WordList
            page={page}
            setPage={setPage}
            setSelectedWord={setSelectedWord}
            favorites={favorites}
            setFavorites={setFavorites}
            cachedWordPages={cachedWordPages}
            setcachedWordPages={setcachedWordPages}
            setInfoDrawerOpen={setInfoDrawerOpen}
          />
        )}

        {verifyTable(tab) === 1 && (
          <History
            historyPage={historyPage}
            setHistorypage={setHistorypage}
            setSelectedWord={setSelectedWord}
            favorites={favorites}
            setFavorites={setFavorites}
            setInfoDrawerOpen={setInfoDrawerOpen}
          />
        )}

        {verifyTable(tab) === 2 && (
          <Favorites
            favoritesPage={favoritesPage}
            setFavoritespage={setFavoritespage}
            setSelectedWord={setSelectedWord}
            favorites={favorites}
            setFavorites={setFavorites}
            setInfoDrawerOpen={setInfoDrawerOpen}
          />
        )}
      </WordListsStructure>
    </>
  );
}
