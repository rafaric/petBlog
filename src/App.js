import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Header from "./components/Header";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Post from "./pages/Post";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categoria from "./pages/Categoria";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/categoria/:id/*" element={<Categoria />} />"
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
