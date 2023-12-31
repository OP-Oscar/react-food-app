import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";

function App() {
  return (
    <div className="App">
      <Header />
      {/* This is where you will code for some of Part 1. */}
      <Routes>
        <Route index element={<HomeScreen />}></Route>
        <Route path="/newRecipe" element={<NewRecipeScreen />}></Route>
        <Route path="/recipe/:id" element={<DetailScreen />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
