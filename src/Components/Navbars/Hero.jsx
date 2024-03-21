import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-primary">ByteBlaze</span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and{" "}
            <br />
            the Curious minds eager to understand it.
          </p>
          <div className="space-x-4">
            <Link
              to="/blogs"
              className="btn border-2 shadow-purple-800 border-purple-700 font-bold"
            >
              Read Blogs
            </Link>
            <Link
              to="/bookmarks"
              className="border-2 font-bold border-purple-600 shadow-purple-800  btn"
            >
              Bookmarks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
