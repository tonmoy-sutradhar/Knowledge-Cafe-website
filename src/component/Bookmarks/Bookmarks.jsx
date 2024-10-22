import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmark }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 m-4 p-5">
      <h3 className="text-3xl font-bold">Bookmarks Blogs: {bookmark.length}</h3>

      {bookmark.map((book) => (
        <Bookmark key={book.id} h book={book}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array.isRequired,
};

export default Bookmarks;
