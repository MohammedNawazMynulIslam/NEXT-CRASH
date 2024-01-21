"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PrompCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          onClick={handleTagClick}
        ></PromptCard>
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
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag "
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
        <PromptCardList data={posts} handleTagClick={() => {}}></PromptCardList>
      </form>
    </section>
  );
};
