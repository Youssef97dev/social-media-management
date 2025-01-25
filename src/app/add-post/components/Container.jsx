import React from "react";
import CreatePost from "./CreatePost";
import PostPreview from "./PostPreview";

const Container = () => {
  return (
    <div className="w-full h-[93vh] flex justify-center items-center">
      <CreatePost />
      <PostPreview />
    </div>
  );
};

export default Container;
