"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/nav";

const Page = () => {
  const blogId = usePathname();
  const [fetchData, setFetchData] = useState([]);
  const fetchId = async () => {
    const dataJson = await fetch(`https://dev.to/api/articles${blogId}`);
    const data = await dataJson.json();
    setFetchData(data);
  };
  useEffect(() => {
    fetchId();
  }, []);
  const user = fetchData.user;
  if (user === undefined) return "loading";
  return (
    <div className="page-all-container">
      <div>
        <Navbar />
      </div>
      <div className="page-container">
        <div className="title-page">{fetchData.title}</div>
        <img src={fetchData.social_image} className="page-img" />{" "}
        <div className="desc-page">{fetchData.description}</div>
        <div>
          <img src={user.profile_image} className="pro" />
          <div>{user.name}</div>
        </div>
        <Link href={`${fetchData.url}`}></Link>
      </div>
    </div>
  );
};
export default Page;
