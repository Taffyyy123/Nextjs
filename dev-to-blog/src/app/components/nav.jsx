"use client";
import Link from "next/link";
import NewPost from "../newPost/page";
import { useRouter } from "next/navigation";
const Navbar = ({ children }) => {
  const routerNav = useRouter();
  return (
    <div className="nav-container">
      <button className="home-container" onClick={() => routerNav.push("/")}>
        <img
          src="https://png.pngtree.com/png-vector/20221110/ourmid/pngtree-thin-line-house-icon-isolated-on-white-background-vector-png-image_40618990.jpg"
          className="home-icon"
        />
        <div className="home-text">Home</div>
      </button>
      <button className="create-post" onClick={() => routerNav.push("newPost")}>
        Create a Post
      </button>
      {children}
    </div>
  );
};
export default Navbar;
