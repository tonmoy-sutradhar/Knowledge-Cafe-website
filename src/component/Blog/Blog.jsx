import PropTypes from "prop-types";
import { BsBookmarkPlusFill } from "react-icons/bs";
const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  // console.log(blog);

  return (
    <div className="mb-12 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center mb-3">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>
            {reading_time} min read{" "}
            <button
              className="text-red-400 text-2xl ml-2"
              onClick={handleBookMark}
            >
              <BsBookmarkPlusFill></BsBookmarkPlusFill>
            </button>
          </span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="mr-4" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
