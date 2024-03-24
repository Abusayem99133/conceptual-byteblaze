import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteBlog } from "../../../Utils";

const BlogCard = ({ blog, deletable, handleBookmark }) => {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative mt-12">
      <Link to={`/blog/${id}`}>
        <a className="max-w-sm mx-auto group  hover:no-underline focus:no-underline bg-gray-900">
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={cover_image}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs text-gray-400">{published_at}</span>
            <p>{description}</p>
          </div>
        </a>
      </Link>
      {deletable && (
        <div
          onClick={() => handleBookmark()}
          className="absolute bg-primary p-3 rounded-full hover:scale-105 hover:bg-purple-400 -top-5 -right-5"
        >
          <MdDeleteForever
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
