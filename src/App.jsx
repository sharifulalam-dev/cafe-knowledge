import { useState } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/blogs";

function App() {
  const [bookMark, setbookMark] = useState([]);

  function onHandleBookmark(bookMarkks) {
    const newBookMark = [...bookMark, bookMarkks];

    setbookMark(newBookMark);
  }

  const [time, settime] = useState(0);

  function handleTimeAdd(times) {
    const { reading_time, title } = times;

    const newTime = time + Number(reading_time);

    settime(newTime);

    const newbkmarks = bookMark.filter((item) => item !== title);

    setbookMark(newbkmarks);
  }
  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between py-5 max-h-[80px] items-center border-b mb-5">
        <Header onHandleBookmark={onHandleBookmark} />
      </div>
      <div className="w-11/12 mx-auto flex gap-10 ">
        <Blogs
          onHandleBookmark={onHandleBookmark}
          handleTimeAdd={handleTimeAdd}
          bookMark={bookMark}
        />
        <div className=" w-1/3">
          <div className="px-4 py-2 mb-4 border border-green-300 w-full text-center">
            <h3>Spend Time on Reading: {time} Min</h3>
          </div>

          <div className="px-6 py-10 bg-slate-100 pb-6">
            <h3 className="mb-8 text-2xl font-bold">
              Bookmarked Blogs: {bookMark.length}
            </h3>

            <ul>
              {bookMark.length > 0 &&
                bookMark.map((item, index) => (
                  <li
                    key={index}
                    className="bg-white p-4 rounded-lg uppercase mb-4"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
