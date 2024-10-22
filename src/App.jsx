import "./App.css";
import Blog from "./component/Blog/Blog";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        {/* <Blog></Blog> */}
      </div>
    </>
  );
}

export default App;
