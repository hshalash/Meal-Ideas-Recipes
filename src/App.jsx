import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import RecipeDetails from "./Components/RecipeDetails/RecipeDetails";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
