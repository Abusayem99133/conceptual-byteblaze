import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import BlogCard from "../Components/Navbars/BlogCard/BlogCard";
import EmptyState from "./EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleBookmark = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1)
    return (
      <EmptyState
        message="No Bookmark Available !"
        address={"/blogs"}
        label={"Go To Blogs"}
      ></EmptyState>
    );
  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-4 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleBookmark={handleBookmark}
          deletable={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
