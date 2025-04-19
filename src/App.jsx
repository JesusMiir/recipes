import HeaderComponent from "./components/HeaderComponent";
import Recipes from "./pages/Recipes";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleRecipePage from "./pages/SingleRecipePage";

function App() {

  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<SingleRecipePage />} />
      </Routes>
    </>
  )
}

export default App
