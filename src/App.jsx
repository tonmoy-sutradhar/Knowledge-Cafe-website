import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    const newBookMark = [...bookmark, blog];
    setBookmark(newBookMark);
  };

  const handleMarkAsRead = (time) => {
    console.log("Marking as read");
  };
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBookMark={handleBookMark}
        ></Blogs>
        <Bookmarks bookmark={bookmark}></Bookmarks>
      </div>
    </>
  );
}

export default App;
