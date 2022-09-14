import Board from "./components/board/board";
import SingIn from "./components/singIn/singin";
import CreateUser from "./components/createUser/CreateUser";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import {
  HeaderColor,
  DarkFontColor,
  LightFontColor,
  BackgroundColor,
  SecundaryBackgroundColor,
  GenerateWordColor,
} from "./Styles/StyleFunctions.js";

const AppBox = styled.div`
  background-color: ${BackgroundColor};
  color: ${DarkFontColor};
  min-height: 100vh;

  input {
    font-family: "Varela Round", sans-serif;
  }

  a {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
  }
`;

function App() {
  return (
    <AppBox>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dict app</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          href="http://fonts.cdnfonts.com/css/sedgwick-ave"
          rel="stylesheet"
        />
        <link href="http://fonts.cdnfonts.com/css/helmida" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Board />}></Route>
            <Route path="/:tab" element={<Board />}></Route>
            <Route path="/login" element={<SingIn />}></Route>
            <Route
              path="/login/create-account"
              element={<CreateUser />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppBox>
  );
}

export default App;
