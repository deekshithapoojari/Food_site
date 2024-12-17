import { Box, Typography } from "@mui/material";
import React from "react";

import food3 from "../Assests/Images/food3.jpg";
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "yellow",
          }}
          gutterBottom
        >
          Flavour Fusion
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#fff" }}
        >
          Where Every Recipe Tells a Story.
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#fff " }}
        >
          From everyday meals to gourmet delights, Discover recipes that spark
          joy in every bite.
        </Typography>
      </Box>
    </Box>
  );
}
