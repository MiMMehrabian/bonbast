import { TextField } from "@mui/material";
import React from "react";
import { AiOutlineDiscord, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-inherit footer-center border-t-2 gap-y-10 p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <div className="place-self-start">
        <h1 className="text-4xl font-bold text-light-black-color">BonBast</h1>
        <div className="flex gap-4 mt-5  place-items-center text-light-black-color">
          <FaFacebookF size={22} />
          <FaXTwitter size={22} />
          <AiOutlineYoutube size={30} />
          <AiOutlineDiscord size={30} />
        </div>
      </div>
      <div className=" text-light-black-color">
        <h1 className="text-lg">Support</h1>
        <ul className="mt-5">
          <li className="my-1 text-sm">Contact Us</li>
          <li className="my-1 text-sm">FAQ</li>
          <li className="my-1 text-sm">About Us</li>
        </ul>
      </div>
      <div className=" text-light-black-color self-start">
        <h1 className="text-lg">API</h1>
        <ul className="mt-5">
          <li className="my-1 text-sm">API key</li>
        </ul>
      </div>
      <div className="self-start">
        <h1 className="text-lg mb-5 text-light-black-color">
          Always be aware of up-to-date prices
        </h1>
        <div className="flex justify-center place-items-center gap-x-2">
          <TextField
            placeholder="your@email.com"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={"primary"}
            className="!text-xs placeholder:!text-xs"
            sx={{
              backgroundColor: "inherit",
              height: "2.5rem",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
              "& .MuiInputLabel-root": {
                color: "purple",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "orange",
              },
            }}
          />
          <button className="bg-gray-200 text-light-black-color rounded-[10px] text-sm p-2">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
