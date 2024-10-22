import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
function Hastag({ item }) {
  return (
    <ul className="flex space-x-2 text-gray-400">
      {item.hashtags.map((hashtag, index) => (
        <li key={index}>{hashtag}</li>
      ))}
    </ul>
  );
}

export default function Blogs({ onHandleBookmark, handleTimeAdd, bookMark }) {
  console.log(bookMark);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <>
      <div className="w-2/3">
        {blog &&
          blog.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <img
                  className="h-[420px] w-full object-cover"
                  src={item.cover_url}
                  alt=""
                />

                <div className="flex justify-between items-center py-5">
                  <div className="flex space-x-4">
                    <img
                      className="w-[55px] h-[55px] rounded-full"
                      src={item.author_img}
                      alt=""
                    />
                    <div className="flex flex-col space-y-1">
                      <h2 className="text-lg font-bold uppercase">
                        {item.author}
                      </h2>
                      <p className="text-gray-400">{item.post_date}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center justify-center text-md">
                    <p>{item.reading_time} mins read</p>
                    <button
                      className={`p-2 rounded text-white ${
                        bookMark.includes(item.title)
                          ? "bg-red-500"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                      onClick={() => {
                        const newTitle = item.title;
                        onHandleBookmark(newTitle);
                      }}
                    >
                      <FaRegBookmark />
                    </button>
                  </div>
                </div>
                <h1 className="text-2xl font-bold my-3 uppercase">
                  {item.title}
                </h1>
                <Hastag item={item}></Hastag>

                <button
                  onClick={() => {
                    handleTimeAdd(item);
                  }}
                  className="text-blue-800 underline my-4"
                >
                  Mark as Read
                </button>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
}

Hastag.propTypes = {
  item: PropTypes.object.isRequired,
};

Blogs.propTypes = {
  onHandleBookmark: PropTypes.func.isRequired,
  handleTimeAdd: PropTypes.func.isRequired,
  bookMark: PropTypes.array,
};
