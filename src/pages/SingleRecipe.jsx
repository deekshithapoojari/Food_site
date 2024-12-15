import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function SingleRecipe() {
  const { id } = useParams();
  const [productInfo, setproductInfo] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        setproductInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ p: 1 }}>
        <Grid container spacing={2}>
      
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                p: 2,
              }}
            >
              <img
                src={productInfo?.image}
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                alt="Selected"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ height: "100vh", padding: 2 }}>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "14px", fontWeight: "bolder" }}
                >
                  {productInfo?.cuisine}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "24px", fontWeight: "bolder" }}
                >
                  {productInfo?.name}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Chip
                  size="small"
                  label={productInfo?.rating}
                  color={
                    productInfo?.rating > 4.5
                      ? "success"
                      : productInfo?.rating > 4
                      ? "warning"
                      : "error"
                  }
                  icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                  sx={{ borderRadius: "10px" }}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography
                  variant="h6"
                  mt={1}
                  fontWeight={"bolder"}
                  color="green"
                >
                  {productInfo?.difficulty}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography variant="h4" mt={1} color="text.secondary">
                  {productInfo?.caloriesPerServing} Calories
                </Typography>
                <Typography variant="h6" mt={1} color="text.secondary">
                  {productInfo?.prepTimeMinutes} mins
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography variant="caption" mb={1} color="text.secondary">
                  {productInfo?.shippingInformation}
                </Typography>
              </Box>
              <Divider />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Tags</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          <div>
                            {productInfo?.tags.map((i) => (
                              <h4>{i}</h4>
                            ))}
                          </div>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ingredients</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          <div>
                            {productInfo?.ingredients.map((i) => (
                              <h4>{i}</h4>
                            ))}
                          </div>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Instructions</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          <div>
                            {productInfo?.instructions.map((i) => (
                              <h4>{i}</h4>
                            ))}
                          </div>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Serving</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          <h4>{productInfo?.servings} Persons</h4>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
