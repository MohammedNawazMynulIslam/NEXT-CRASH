"use client";
import { useState, useEffect } from "react";
import PrompCard from "./PrompCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 flex flex-col  lg:flex-row gap-5">
      {data.map((post) => (
        <PrompCard
          key={post._id}
          post={post}
          onClick={handleTagClick}
        ></PrompCard>
      ))}
    </div>
  );
};

export const Feed = () => {
  const [searchText, setSearchText] = useState(" ");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full">
        <input
          type="text"
          placeholder="Search prompt ,tag or profile "
          // value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />

        <PromptCardList data={posts} handleTagClick={() => {}}></PromptCardList>
      </form>
    </section>
  );
};
