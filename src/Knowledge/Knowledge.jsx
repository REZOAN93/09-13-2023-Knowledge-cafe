import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookMark from "./BookMark";
import News from "./News";

const Knowledge = () => {
  const [readingTime,setReadingTime]=useState(0)
  const [news, setNews] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const handleAddBookMark = (data) => {
    const newMarks = [...bookmarks, data];
    setBookMarks(newMarks);
  };

  const handleMarkAsRead=(id,time)=>{
    const readingTimes=readingTime+time
    setReadingTime(readingTimes)
  
    // remove bookmark
    const remaingBookmarks=bookmarks.filter(na=>na.id!==id)
    setBookMarks(remaingBookmarks)
  }


  return (
    <div>
      <div className=" flex mt-4">
        <div className="w-8/12">
          {news.map((na) => (
            <News
              key={na.id}
              news={na}
              handleAddBookMark={handleAddBookMark}
              handleMarkAsRead={handleMarkAsRead}
            ></News>
          ))}
        </div>
        <div className="w-4/12">
          <div className="pl-10">
            <div className="bg-blue-100 rounded-lg">
              <p className="p-5 text-2xl font-bold text-blue-800">
                Spent time on read : {readingTime}
              </p>
            </div>
            <div className="bg-gray-300 my-5 rounded-lg pb-5">
              <div className="p-5">
                <p className=" text-xl font-bold">
                  Bookmarked Blogs : {bookmarks.length}
                </p>
              </div>
              <div>
                {bookmarks.map((na,index) => (
                  <BookMark key={index} mark={na}></BookMark>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
