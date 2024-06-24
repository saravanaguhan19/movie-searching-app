import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import NavBar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <NavBar />
      <MainRoutes />
    </>
  );
}

export default App;
