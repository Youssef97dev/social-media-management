"use client";
import { useState } from "react";
import { LiaSquare, LiaPlusSquare } from "react-icons/lia";
import {
  BsPinterest,
  BsLinkedin,
  BsFacebook,
  BsFillThreadsFill,
} from "react-icons/bs";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

const profiles = [
  {
    id: "1",
    name: "pinterest",
    src: "/profile-1.jpg",
    social: <BsPinterest size={18} className="rounded-full" />,
    color: "#df0022",
    border_class: "border-2 border-[#df0022]",
    social_color: (
      <BsPinterest size={18} className="rounded-full" color="#df0022" />
    ),
  },
  {
    id: "2",
    name: "instagram",
    src: "/profile-1.jpg",
    social: <AiFillInstagram size={18} className="rounded-full" />,
    color: "#D72A78",
    border_class: "border-2 border-[#D72A78]",
    social_color: (
      <AiFillInstagram size={18} className="rounded-full" color="#D72A78" />
    ),
  },
  {
    id: "3",
    name: "linkedin",
    src: "/profile-1.jpg",
    social: <BsLinkedin size={18} className="rounded-full" />,
    color: "#0072B1",
    border_class: "border-2 border-[#0072B1]",
    social_color: (
      <BsLinkedin size={18} className="rounded-full" color="#0072B1" />
    ),
  },
  {
    id: "4",
    name: "youtube",
    src: "/profile-1.jpg",
    social: <SiYoutubemusic size={18} className="rounded-full" />,
    color: "#F60002",
    border_class: "border-2 border-[#F60002]",
    social_color: (
      <SiYoutubemusic size={18} className="rounded-full" color="#F60002" />
    ),
  },
  {
    id: "5",
    name: "facebook",
    src: "/profile-1.jpg",
    social: <BsFacebook size={18} className="rounded-full" />,
    color: "#4064AC",
    border_class: "border-2 border-[#4064AC]",
    social_color: (
      <BsFacebook size={18} className="rounded-full" color="#4064AC" />
    ),
  },
  {
    id: "6",
    name: "threads",
    src: "/profile-1.jpg",
    social: <BsFillThreadsFill size={18} className="rounded-full" />,
    color: "#000000",
    border_class: "border-2 border-[#000000]",
    social_color: (
      <BsFillThreadsFill size={18} className="rounded-full" color="#000000" />
    ),
  },
  {
    id: "7",
    name: "tiktok",
    src: "/profile-1.jpg",
    social: <AiFillTikTok size={18} className="rounded-full" />,
    color: "#000000",
    border_class: "border-2 border-[#000000]",
    social_color: (
      <AiFillTikTok size={18} className="rounded-full" color="#000000" />
    ),
  },
  {
    id: "8",
    name: "x",
    src: "/profile-1.jpg",
    social: <FaSquareXTwitter size={18} className="rounded-full" />,
    color: "#000000",
    border_class: "border-2 border-[#000000]",
    social_color: (
      <FaSquareXTwitter size={18} className="rounded-full" color="#000000" />
    ),
  },
];

const CreatePost = () => {
  const [activeColor, setActiveColor] = useState("");
  const [activeSocial, setActiveSocial] = useState([]);

  const handleClickProfile = (color, name) => {
    setActiveColor(color);
    setActiveSocial((prev) => {
      if (prev.includes(name)) {
        // Remove the name if it already exists
        return prev.filter((social) => social !== name);
      } else {
        // Add the name to the array
        return [...prev, name];
      }
    });
  };

  return (
    <div className="w-full h-full bg-background_2 flex flex-col justify-start items-start gap-3 p-6">
      <span className="font-bold text-[18px] leading-[24px] text-color_30">
        Create your post
      </span>
      <div className="flex justify-start items-center gap-4 text-[14px] leading-[21px] text-color_30">
        <button className="inline-flex items-center">
          {"  "}
          <LiaPlusSquare size={18} /> Select All.
        </button>
        <button className="inline-flex items-center">
          {"  "}
          <LiaSquare size={18} /> Select None.
        </button>
      </div>
      <div className="flex justify-start items-center gap-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="relative group cursor-pointer"
            onClick={() => handleClickProfile(profile.color, profile.name)}
          >
            <Image
              src={profile.src}
              width={100}
              height={100}
              className={`object-cover w-12 h-12 rounded-full ${
                activeSocial.includes(profile.name)
                  ? profile.border_class
                  : "border border-black"
              }`}
            />
            {!activeSocial.includes(profile.name) && (
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 rounded-full"></div>
            )}
            <div className={`absolute bottom-0 left-8 bg-white rounded-full`}>
              {activeSocial.includes(profile.name)
                ? profile.social_color
                : profile.social}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
