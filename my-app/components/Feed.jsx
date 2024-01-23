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
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (e) => {
    const form = e.target.value;
    const searchText = form.toLowerCase();
    const filteredPost = posts.filter((post) => {
      const promptMatches = post.prompt.toLowerCase().includes(searchText);
      const tagMatches = post.tag.toLowerCase().includes(searchText);
      const profileMatches = post.creator.username
        .toLowerCase()
        .includes(searchText);
      return promptMatches || tagMatches || profileMatches;
    });
    setFilteredPosts(filteredPost);
    setSearchText(form);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full">
        <input
          type="text"
          placeholder="Search prompt ,tag or profile "
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />

        <PromptCardList
          data={filteredPosts}
          handleTagClick={() => {}}
        ></PromptCardList>
      </form>
    </section>
  );
};
