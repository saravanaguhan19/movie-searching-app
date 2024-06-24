import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Error from "../pages/Error";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:name" element={<MovieDetails />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
