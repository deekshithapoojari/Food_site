import {
    Box,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Paper,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import StarRateIcon from "@mui/icons-material/StarRate";
  export default function Recipe({recipe}) {
  
    
  
    return (
      <div>
        <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
          <Paper elevation={2} sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              alt={recipe.name}
              height={"300"}
              image={recipe.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="overline"
                fontWeight="bolder"
                component="div"
              >
                {recipe.name}
              </Typography>
  
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="subtitle1">{recipe.brand}</Typography>
  
                <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
                  {recipe.tags.map((i) => (
                    <Chip
                      key={i}
                      label={i}
                      size="small"
                      sx={{ borderRadius: "10px" }}
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  {/* <Typography variant="subtitle2">${product.price}</Typography>
  
                  <Typography variant="subtitle2">
                    <strike>
                      $
                      {(product.price + product.discountPercentage / 100).toFixed(
                        2
                      )}
                    </strike>
                  </Typography> */}
  
                  {/* <Typography sx={{ color: "green", fontSize: "14px" }}>
                    {product.discountPercentage}% Off
                  </Typography> */}
                </Box>
  
                <Chip
                  label={recipe.rating}
                  size="small"
                  color="success"
                  sx={{ borderRadius: "10px" }}
                  icon={<StarRateIcon sx={{ fontSize: "10px" }} />}
                />
              </Box>
            </CardActions>
          </Paper>
        </Link>
      </div>
    );
  }
  