import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img
        className="w-1/2"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
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
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
