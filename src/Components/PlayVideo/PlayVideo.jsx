import React, { useEffect, useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import { API_KEY, converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApidata] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApidata(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div className="p-3 w-[60vw]">
      {/* <video src={video1} controls muted autoPlay className="  m-4"></video> */}
      <iframe
        className=" sm:w-[100%] sm:h-[500px] w-[90vw] h-[280px] m-4"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex ml-4 justify-between  sm:flex-row flex-col w-[100vw] sm:w-[60vw]">
        <div>
          <h1 className="text-2xl font-semibold ">
            {apiData ? apiData.snippet.title : "Title Here"}
          </h1>
          <div className="play-video-info">
            <div>
              <p>
                {apiData ? converter(apiData.statistics.viewCount) : "16k"}{" "}
                Views &bull;
                {apiData
                  ? moment(apiData.snippet.publishedAt).fromNow()
                  : "5 days ago"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex sm:space-x-9  items-center justify-around m-2 w-[100vw]">
          <span>
            <img className=" size-8" src={like} alt="" />
            {apiData ? converter(apiData.statistics.likeCount) : ""}
          </span>
          <span>
            <img className=" size-8" src={dislike} alt="" />
            {apiData ? "" : ""} Dislike
          </span>
          <span>
            <img className=" size-9 mt-[-6px]" src={share} alt="" />
            Share
          </span>
          <span>
            <img className=" size-8" src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <div>
        <div className="border-2 border-black w-[98%] ml-[2%] mt-4"></div>
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={jack} alt="" className="w-14 rounded-full m-3" />
            <span className=" font-semibold text-xl ">
              {apiData ? apiData.snippet.channelTitle : ""}
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
