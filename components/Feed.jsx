"use client"

import { useState, useEffect } from "react";
import PromptsCard from "./PromptsCard";


const PromCardList = ({ data, handleSearchChange }) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post) => (
          <PromptsCard
            key={post._id}
            post={post}
            handleTagClick={handleSearchChange}
          />
        ))
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json()
      console.log(data)
      setPosts(data)
    }

    fetchPosts()
  }, [])

  const handleSearchChange = (e) => {

  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromCardList
        data={posts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed