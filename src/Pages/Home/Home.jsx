import React, { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className="flex">
      <div>
        <Sidebar
          sidebar={sidebar}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div
        className={`container mt-3  ${
          sidebar
            ? " ml-0 md:ml-8 lg:ml-8 ease-in-out duration-100 "
            : " large-container ease-in-out duration-100 sm:m-0 "
        }`}
      >
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;
