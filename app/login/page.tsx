import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-gray-50 text-gray-900 flex justify-center place-items-center ">
      <div className="lg:w-[40vw] w-full lg:p-10 lg:h-[80vh] h-full justify-center p-5 bg-[radial-gradient(ellipse_at_50%_50%,_hsl(210,_100%,_97%),_hsl(0,_0%,_100%))] flex flex-col gap-y-10 border-2 border-gray-100 shadow-md drop-shadow-sm shadow-gray-200 rounded-2xl">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl text-light-black-color font-medium">
            <Link href={"/"}>BonBast</Link>
          </h1>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign in
          </Typography>
        </div>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 4,
          }}
        >
          <FormControl className="gap-y-1">
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={"primary"}
              sx={{
                backgroundColor: "white", // Set background color to white
                height: "2.5rem", // Set height
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // Optional: Customize border color
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
          </FormControl>
          <FormControl aria-autocomplete="none">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Link href={"/"}>Forgot your password?</Link>
            </Box>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="off" // Disable autocomplete
              autoFocus
              required
              fullWidth
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: "white", // Set background color to white
                height: "2.5rem", // Set height
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // Optional: Customize border color
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
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "black", // Set background color to black
              color: "white", // Set text color to white
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Change to a lighter black on hover
                transition: "background-color 0.3s ease", // Smooth transition
              },
            }}
          >
            Sign in
          </Button>

          <Typography sx={{ textAlign: "center" }}>
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/">Sign up</Link>
            </span>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default page;
