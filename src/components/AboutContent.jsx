import { Box, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import food2 from "../Assests/Images/food2.jpg";
import food3 from "../Assests/Images/food3.jpg";
import food4 from "../Assests/Images/food4.jpg";

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
        <Grid item xs={12} md={5}>
          <img
            src={food2}
            alt="About Us"
            style={{ width: "100%", borderRadius: "20px", height: "400px", objectFit: "cover" }}
          />
        </Grid>

        {/* About Content */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 2,
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            About <span style={{ color: "#5a0c4a" }}>Us</span>
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ textAlign: "justify", mb: 2 }}>
            Welcome to <b>RecipeVerse</b>, your ultimate culinary destination! Explore a universe
            of delicious recipes, from quick weeknight meals to gourmet dishes. Whether you're
            a seasoned chef or a beginner in the kitchen, our step-by-step guides, tips, and
            flavor-packed ideas will help you create magic on your plate.
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ textAlign: "justify" }}>
            At RecipeVerse, we celebrate the art of cooking. Discover a curated collection of
            recipes spanning global cuisines, innovative dishes, and timeless classics. Designed
            for food enthusiasts and home cooks alike, our platform combines inspiration,
            precision, and creativity to elevate your kitchen experience.
          </Typography>
        </Grid>
      </Grid>

      {/* Additional Images Section */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 2, color: "#5a0c4a" }}
        >
          Explore Our Culinary World
        </Typography>

        <Grid container spacing={3}>
          {/* Image 1 */}
          <Grid item xs={12} sm={4}>
            <img
              src={food3}
              alt="Delicious Dish"
              style={{
                width: "100%",
                borderRadius: "15px",
                height: "250px",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Image 2 */}
          <Grid item xs={12} sm={4}>
            <img
              src={food4}
              alt="Fresh Ingredients"
              style={{
                width: "100%",
                borderRadius: "15px",
                height: "250px",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Image 3 */}
          <Grid item xs={12} sm={4}>
            <img
              src={food2}
              alt="Gourmet Cooking"
              style={{
                width: "100%",
                borderRadius: "15px",
                height: "250px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Closing Content */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
        >
          Ready to Cook Something Delicious?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mb: 3 }}>
          Join us at <b>RecipeVerse</b> to explore endless culinary possibilities. Whether you’re
          looking for a quick meal, a family feast, or creative cooking ideas, we’ve got you
          covered. Start your cooking journey today!
        </Typography>
      </Box>
    </Box>
  );
}
