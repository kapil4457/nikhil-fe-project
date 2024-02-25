import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  let params = useParams();

  const [result, setResult] = useState(null);
  const fetchData = async () => {
    try {
      const options1 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${
          params.type === "movie" ? "movie" : "tv"
        }/${params.id}`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
        },
      };

      const options2 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${
          params.type === "movie" ? "movie" : "tv"
        }/${params.id}/credits`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
        },
      };

      const options3 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${
          params.type === "movie" ? "movie" : "tv"
        }/${params.id}/images`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
        },
      };

      const options4 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${
          params.type === "movie" ? "movie" : "tv"
        }/${params.id}/recommendations?page=1`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
        },
      };

      const options5 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${
          params.type === "movie" ? "movie" : "tv"
        }/${params.id}/reviews?language=en-US&page=1`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
        },
      };
      const options6 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${
          params.type === "movie" ? "movie" : "tv"
        }/${params.id}/videos?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
        },
      };

      const options7 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${
          params.type === "movie" ? "movie" : "tv"
        }/${params.id}/watch/providers`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
        },
      };
      const { data: info } = await axios.request(options1);
      const { data: credits } = await axios.request(options2);
      const { data: images } = await axios.request(options3);
      const { data: recommendations } = await axios.request(options4);
      const { data: reviews } = await axios.request(options5);
      const { data: videos } = await axios.request(options6);
      const { data: providers } = await axios.request(options7);

      console.log(info);
      console.log(credits);
      console.log(images);
      console.log(recommendations);
      console.log(reviews);
      console.log(videos);
      console.log(providers);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>DetailsPage</div>;
};

export default DetailsPage;
