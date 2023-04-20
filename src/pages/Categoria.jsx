import { useState, useEffect } from "react";
import "../assets/css/blog.css";
import ListPosts from "../components/ListPosts";
import { obtener } from "../Api/api";
import ListCategories from "../components/ListCategories";
import SubCategoria from "./SubCategoria";
import {
  Link,
  useResolvedPath,
  useParams,
  Routes,
  Route,
} from "react-router-dom";

const Categoria = () => {
  const [subcategorias, setSubcategorias] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    obtener(`/categorias?id=${id}`, (res) => {
      setSubcategorias(res[0].subcategorias);
    });
  }, [id]);

  const url = useResolvedPath("").pathname;

  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Noticias</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria.id}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          path="/"
          element={<ListPosts url={`/posts?categoria=${id}`} />}
        />
        <Route path="/:subcategoria" element={<SubCategoria />} />
      </Routes>
    </>
  );
};

export default Categoria;
