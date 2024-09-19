// import { TextField } from "@mui/material";
// import React from "react";
import { AiOutlineDiscord, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// function Footer() {
//   return (
//     <footer className="bg-inherit footer-center border-t-2 gap-y-10 p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
//       <div className="place-self-start">
//         <h1 className="text-4xl font-bold text-light-black-color">BonBast</h1>
//         <div className="flex gap-4 mt-5  place-items-center text-light-black-color">
//           <FaFacebookF size={22} />
//           <FaXTwitter size={22} />
//           <AiOutlineYoutube size={30} />
//           <AiOutlineDiscord size={30} />
//         </div>
//       </div>
//       <div className=" text-light-black-color">
//         <h1 className="text-lg">Support</h1>
//         <ul className="mt-5">
//           <li className="my-1 text-sm">Contact Us</li>
//           <li className="my-1 text-sm">FAQ</li>
//           <li className="my-1 text-sm">About Us</li>
//         </ul>
//       </div>
//       <div className=" text-light-black-color self-start">
//         <h1 className="text-lg">API</h1>
//         <ul className="mt-5">
//           <li className="my-1 text-sm">API key</li>
//         </ul>
//       </div>
//       <div className="self-start">
//         <h1 className="text-lg mb-5 text-light-black-color">
//           Always be aware of up-to-date prices
//         </h1>
//         <div className="flex justify-center place-items-center gap-x-2">
//           <TextField
//             placeholder="your@email.com"
//             autoFocus
//             required
//             fullWidth
//             variant="outlined"
//             color={"primary"}
//             className="!text-xs placeholder:!text-xs"
//             sx={{
//               backgroundColor: "inherit",
//               height: "2.5rem",
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "gray",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "gray",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "gray",
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "purple",
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "orange",
//               },
//             }}
//           />
//           <button className="bg-gray-200 text-light-black-color rounded-[10px] text-sm p-2">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// components/Footer.js
import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Divider sx={{ height: "2px", backgroundColor: "#EFF2F5", mb: 2 }} />
      <Box
        sx={{
          padding: "40px 0",
          backgroundColor: "#FCFDFE",
          color: "white",
          textAlign: "center",
        }}
        role="contentinfo"
        itemScope
        itemType="http://schema.org/WPFooter"
      >
        <Box
          sx={{ paddingBottom: "25px" }}
          role="navigation"
          aria-labelledby="social-heading"
          display={"flex"}
          justifyContent={"center"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Typography
              id="social-heading"
              variant="h6"
              component="h3"
              color="#000"
            >
              Follow us on social media
            </Typography>
            <Box display={"flex"} justifyContent={"center"} gap={3}>
              <Link href="#" aria-label="Facebook" sx={{ mx: 1 }}>
                <FaFacebookF className="text-light-black-color" size={22} />
              </Link>
              <Link href="#" aria-label="Twitter" sx={{ mx: 1 }}>
                <FaXTwitter className="text-light-black-color" size={22} />
              </Link>
              <Link href="#" aria-label="Youtube" sx={{ mx: 1 }}>
                <AiOutlineYoutube
                  className="text-light-black-color"
                  size={30}
                />
              </Link>
              <Link href="#" aria-label="Discord" sx={{ mx: 1 }}>
                <AiOutlineDiscord
                  className="text-light-black-color"
                  size={30}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ height: "2px", backgroundColor: "white", mb: 2 }} />
        <ul
          style={{
            padding: 0,
            listStyle: "none",
            fontSize: "18px",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          <li style={{ display: "inline-block", padding: "0 10px" }}>
            <Link
              href="#"
             className="!text-light-black-color"
              underline="none"
              sx={{ opacity: 0.8 }}
            >
              Site Home
            </Link>
          </li>
          <li style={{ display: "inline-block", padding: "0 10px" }}>
            <Link
              href="#"
             className="!text-light-black-color"
              underline="none"
              sx={{ opacity: 0.8 }}
            >
              Playground
            </Link>
          </li>
          <li style={{ display: "inline-block", padding: "0 10px" }}>
            <Link
              href="#"
             className="!text-light-black-color"
              underline="none"
              sx={{ opacity: 0.8 }}
            >
              About
            </Link>
          </li>
          <li style={{ display: "inline-block", padding: "0 10px" }}>
            <Link
              href="#"
             className="!text-light-black-color"
              underline="none"
              sx={{ opacity: 0.8 }}
            >
              Sitemap
            </Link>
          </li>
          <li style={{ display: "inline-block", padding: "0 10px" }}>
            <Link
              href="#"
             className="!text-light-black-color"
              underline="none"
              sx={{ opacity: 0.8 }}
            >
              Contents
            </Link>
          </li>
        </ul>
        <Typography
          variant="body2"
          className="copyright"
          sx={{ mt: 2, color: "#aaa", fontSize: "13px", marginBottom: 0 }}
        >
          © 2024 All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
