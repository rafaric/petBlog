import "../assets/css/componentes/card.css";
import { obtener } from "../Api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    obtener(url, setPosts);
  }, [url]);

  return (
    <section className="posts contanier">
      {posts.map((post) => (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          className={`post__card post-card--${post.categoria}`}
        >
          <article>
            <h3 className="post-card__title">{post.title}</h3>
            <p className="post-card__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};
export default ListPosts;
