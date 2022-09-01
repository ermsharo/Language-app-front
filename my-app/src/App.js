import Board from "./components/board/board";
import SingIn from "./components/singIn/singin";
import CreateUser from "./components/createUser/CreateUser";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Board />}></Route>
            <Route path="/:tab" element={<Board />}></Route>
            <Route path="/login" element={<SingIn />}></Route>
            <Route path="/login/create-account" element={<CreateUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
