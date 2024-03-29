import React, { useEffect, useState } from "react";
import { API_KEY } from "../../data";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
const Search = () => {
  const [searchApiData, searchSetApidata] = useState(null);

  const fetchSearchVideoData = async () => {
    const query = document.getElementById("searchbox").value;
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/search?q=mobile&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => console.log(data));
    //   searchSetApidata(data.items[1])
  };

  useEffect(() => {
    fetchSearchVideoData();
  }, []);
  return (
    <div>
      <div>
        {/* {searchApiData.map((searchApiData) => {
          return ;
        })} */}
        <PlayVideo videoId={searchApiData.items.videoId} />
      </div>
    </div>
  );
};

export default Search;
