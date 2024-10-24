"use client";
import Link from "next/link";
import Blog from "./components/blog";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/nav";
const Page = () => {
  const limit = 9;
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const getData = async () => {
    const dataJSON = await fetch(
      `https://dev.to/api/articles?per_page=${limit}&page=${count}`
    );
    const JSON = await dataJSON.json();
    setData(JSON);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [count]);

  const minusCount = () => {
    if (count === 1) {
      null;
    } else {
      setCount(count - 1);
    }
  };
  const addCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  const filteredData = data.filter((item, index) => {
    const lowerCaseValue = inputValue.toLocaleLowerCase();
    const lowerCaseTitle = item.title.toLowerCase();
    return lowerCaseTitle.includes(lowerCaseValue);
  });

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="all-container">
        <h1 className="text">All blog post</h1>
        <input
          className="input"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="blogMap-container">
          {filteredData.length == 0 ? (
            <div className="undef">nothing</div>
          ) : null}
          {filteredData.map((item, index) => {
            return (
              <Blog
                key={index}
                title={item.title}
                tags={item.type_of}
                img={item.social_image}
                name={item.user.name}
                date={item.readable_publish_date}
                profile={item.user.profile_image}
                url={item.url}
                id={item.id}
              />
            );
          })}
        </div>{" "}
        {filteredData.length === 0 ? null : (
          <div className="button-container">
            <button className="btn" onClick={() => minusCount()}>
              Back
            </button>
            <div className="page-num">{count}</div>
            <button className="btn" onClick={() => addCount()}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;
