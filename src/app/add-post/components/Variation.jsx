"use client";
import Image from "next/image";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const Variation = () => {
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState();
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* POST */}
      <div className="w-full">
        {/* TEXT INPUT */}
        <form className="w-full flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className=" w-full flex bg-slate-100 rounded-lg p-2"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
          </div>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/addimage.png" alt="" width={20} height={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variation;
