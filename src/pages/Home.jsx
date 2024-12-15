import React from 'react'
import { Box } from "@mui/material";
import { Link } from 'react-router-dom'
import Hero from '../components/Hero';
import AboutContent from "../components/AboutContent";
import Banner from "../components/Banner";
import Footer from "../components/Footer"


export default function Home() {
  return (
    <Box>
    <Box>
      <Hero />
    </Box>
    <Box sx={{ p: 3 }}>
      <AboutContent />
    </Box>
    <Box>
      <Banner />
      <Footer />
    </Box>
  </Box>
  )
}
