import { Box, Typography } from "@mui/material";
import React from "react";

import food3 from "../Assests/Images/food3.jpg"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:`url(${food3})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: "linear-gradient(144deg, #8000ff4a, #00ff7178)",
       
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
          }}
          
          gutterBottom
        >
          Welcome to website
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#000000b8" }}
        >
          Explore. Cook. Savor. Your Culinary Universe Awaits.
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iusto
          totam doloribus id tempore. Numquam a esse ut minima sapiente.
        </Typography>
      </Box>
    </Box>
  );
}
