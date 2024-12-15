import { Box, Chip, Grid2, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import NoData from "../components/NoData";

export default function Recepie() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=500")
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://dummyjson.com/recipes/tags")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  useEffect(() => {
    let filtered = [...recipes];

    // Filter by category

    if (selectedCategory !== "All") {
      filtered = filtered.filter((recipe) =>
        recipe.tags.includes(selectedCategory)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Set the filtered products
    setFilteredRecipes(filtered);
  }, [selectedCategory, searchTerm, recipes]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ p: 2 }} size={{ xs: 12, sm: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Filter By category
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Chip
                color={selectedCategory === "All" ? "success" : "default"}
                label={"All"}
                component={Paper}
                elevation={4}
                onClick={() => {
                  setSelectedCategory("All");
                }}
              />

              {categories.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  component={Paper}
                  elevation={4}
                  color={selectedCategory === item ? "success" : "default"}
                  onClick={() => setSelectedCategory(item)}
                />
              ))}
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 9 }} sx={{ p: 2 }}>
          <Box>
            <TextField
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              fullWidth
              type="search"
              label="Search dishes here"
              placeholder="Search dishes by name"
            />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid2 container spacing={2}>
                {filteredRecipes.length > 0 ? (
                  filteredRecipes.map((item, index) => (
                    <Grid2 key={index} size={{ xs: 12, sm: 4 }}>
                      <RecipeCard recipe={item} />
                    </Grid2>
                  ))
                ) : (
                  <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Grid2 container spacing={2}>
                      <Grid2 size={{ xs: 12, sm: 12 }}>
                        <NoData />
                      </Grid2>
                    </Grid2>
                  </Box>
                )}
              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
