import { Box, Grid, Typography, Stack } from "@mui/material";
import React from "react";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* About Section */}
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#f9f9f9", borderRadius: "20px", p: 3 }}
      >
        {/* Left Side Image */}
        <Grid item xs={12} md={12}>
          <img
            src={
              "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="About Us"
            style={{
              width: "100%",
              borderRadius: "20px",
              height: "400px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Grid>

        {/* About Content */}
        <Grid
          item
          xs={21}
          md={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 2,
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            About <span style={{ color: "#5a0c4a" }}>Us</span>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: "justify", mb: 2 }}
          >
            Our Mission: To inspire creativity in the kitchen by providing
            easy-to-follow, delicious recipes for everyone, from beginners to
            culinary experts.
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: "justify" }}
          >
            Our platform is a haven for food enthusiasts, home cooks, and
            professional chefs who love exploring and sharing the joy of
            cooking.
          </Typography>
        </Grid>
      </Grid>

     
    </Box>
  );
}
