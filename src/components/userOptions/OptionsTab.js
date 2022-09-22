import React, { useState, useEffect } from "react";
import History from "./History";
import Favorites from "./Favorites";
import WordList from "./WordList";
import styled from "styled-components";
import Tab from "./Tab";
import Loading from "../Loading/Loading";
import { GetFavoritesList } from "../../Services/getFavorites";
import { useNavigate } from "react-router-dom";
const TabsStyle = styled.div`
  color: white;
`;

const TabsBox = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;


const Rendered = styled.div`
border: 2px solid red;
color: red;
width :100px ;
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
  const navigate = useNavigate();

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
  const [favoritesPage, setFavoritesPage] = useState(0);

  const [refreshComp, setRefreshComp] = useState(false);




  const [
    { dataFavorites, isLoadingFavorites, isErrorFavorites },
    setPageFavorites,
  ] = GetFavoritesList();

  useEffect(() => {
    console.log("update our changes")
    setPageFavorites(favoritesPage);
  }, [favoritesPage, page, historyPage, refreshComp]);

  useEffect(() => { }, []);

  const refreshComponents = () => {
    setRefreshComp(!refreshComp);
  }

  if (isErrorFavorites) {
    if (isErrorFavorites.auth === false) navigate("/login");
    return <div>Something went wrong ...</div>;
  }
  if (isLoadingFavorites) return <Loading />;
  if (dataFavorites) {
    let ref = favorites;
    for (let i = 0; i < dataFavorites.results; i++) {
      ref[dataFavorites.results[i]] = true;
      setFavorites(ref);
      console.log("Favorites", favorites);
    }

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
              refreshComponents={refreshComponents}
              refreshComp={refreshComp}
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
              refreshComponents={refreshComponents}
              refreshComp={refreshComp}
            />
          )}

          {verifyTable(tab) === 2 && (
            <Favorites
              favoritesPage={favoritesPage}
              setFavoritesPage={setFavoritesPage}
              setSelectedWord={setSelectedWord}
              favorites={favorites}
              setFavorites={setFavorites}
              setInfoDrawerOpen={setInfoDrawerOpen}
              dataFavorites={dataFavorites}
              setPageFavorites={setPageFavorites}
              refreshComponents={refreshComponents}
            />
          )}
        </WordListsStructure>
      </>
    );
  }
}
