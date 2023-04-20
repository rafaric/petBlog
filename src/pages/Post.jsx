import { useEffect, useState } from "react";
import "../assets/css/post.css";
import { useParams, useNavigate } from "react-router-dom";
import { obtener } from "../Api/api";

const Post = ({ url }) => {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtener(`/posts/${id}`, setPost).catch((err) => {
      navigate("/404");
    });
  }, []);

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
