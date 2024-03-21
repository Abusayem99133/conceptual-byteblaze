import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero  -mt-16">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
              ByteBlaze
            </span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and{" "}
            <br />
            the Curious minds eager to understand it.
          </p>
          <div className="space-x-4">
            <Link
              to="/blogs"
              className="btn hover:bg-primary border-2 shadow-purple-800 border-purple-700 font-bold"
            >
              Read Blogs
            </Link>
            <Link
              to="/bookmarks"
              className="border-2 font-bold hover:bg-purple-800 border-purple-400 shadow-purple-800  btn"
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
