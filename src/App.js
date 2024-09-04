import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import LoadingWrapper from "./Components/Common/LoadingWrapper";

const Homepage = lazy(() => import("./Pages/Homepage"));
const CreateChallange = lazy(() => import("./Pages/CreateChallange.js"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingWrapper Component={Homepage} />} />
          <Route path="/create-challange" element={<LoadingWrapper Component={CreateChallange} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
