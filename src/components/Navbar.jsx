import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-start bg-color_30 py-3 text-white">
      <Link
        href="/add-post"
        className="px-5 py-1 bg-color_10 text-color_30 rounded-full"
      >
        Add Post
      </Link>
    </div>
  );
};

export default Navbar;
