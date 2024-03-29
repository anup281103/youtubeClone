import React, { useEffect, useState } from "react";
import { converter } from "../../data";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import moment from "moment";
const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div
      className="feed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-1000
     "
    >
      {data.map((item) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card m-2 hover:scale-[1.02] duration-100 ease-in-out"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className=" rounded-sm w-80"
            />
            <h1 className=" text-lg font-medium">{item.snippet.title}</h1>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {converter(item.statistics.viewCount)} &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
