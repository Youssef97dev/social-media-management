import React from "react";

const PostPreview = () => {
  return (
    <div className="w-full h-full bg-background_1 flex flex-col justify-start items-start gap-3 p-6">
      <span className="font-bold text-[18px] leading-[24px] text-color_30">
        Post preview
      </span>
      <p className="text-[12px] leading-[22px] text-color_40">{`*Social networks tweak their design all the time. This is our best estimate of how this will look like once published.`}</p>
    </div>
  );
};

export default PostPreview;
