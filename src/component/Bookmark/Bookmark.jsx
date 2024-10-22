import PropTypes from "prop-types";

const Bookmark = ({ book }) => {
  const { title } = book;
  // console.log(book);
  return (
    <div className="bg-white p-4 m-4 rounded-xl">
      <h2 className="text-2xl ">{title}</h2>
    </div>
  );
};

Bookmark.PropTypes = {
  book: PropTypes.object,
};
export default Bookmark;
