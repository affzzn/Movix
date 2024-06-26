import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

//

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/movie/:imdbID"
            element={
              <>
                <Header />
                <MovieDetail />
                {/* <Footer /> */}
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <Header />
                <PageNotFound />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
