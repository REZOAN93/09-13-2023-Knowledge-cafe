import React from "react";
import { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

const News = ({ news, handleAddBookMark, handleMarkAsRead }) => {
  const {
    cover,
    title,
    author,
    img,
    posted_date,
    reading_time,
    author_img,
    hashtags,
  } = news;

  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(true);
  };

  return (
    <div>
      <div className="card-compact  mx-auto py-10 pt-0">
        <figure className=" rounded-lg">
          <img src={img} className="rounded-lg" alt="Shoes" />
        </figure>
        <div className="border-b-2 pb-10 pt-5 space-y-5">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={author_img}
                  alt=""
                />
              </div>
              <div>
                <p className=" font-bold">{author}</p>
                <p className="text-gray-600 text-sm">{posted_date}</p>
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2 text-gray-600">
                {reading_time} min read{" "}
                <span onClick={handleActive}>
                  <button
                    onClick={() => handleAddBookMark(news)}
                    className={`${active ? " text-red-800" : "text-blue-700"}`}
                  >
                    <BsFillBookmarkFill className=" text-2xl" />
                  </button>
                </span>
              </p>
            </div>
          </div>
          <h2 className=" text-4xl font-bold">{cover}</h2>
          <p>
            {hashtags.map((has, index) => (
              <a key={index} className="mr-2 text-gray-500" href="">
                #{has}
              </a>
            ))}
          </p>

          <div className="card-actions">
            <button className=" text-blue-700 underline hover:cursor-pointer" onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
