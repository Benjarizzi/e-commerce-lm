import React, { useState } from "react";
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Slider, Button } from "@mui/material";
import "./motor_search.css";

const ProductFilter = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const brands = ["Honda", "Benelli", "Yamaha", "Suzuki", "Mondial"];
  const features = ["400cc", "200cc", "150cc", "125cc", "110cc"];

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleClearFilters = () => {
    setSelectedBrand("");
    setSelectedFeature("");
    setPriceRange([0, 1000]);
  };

  const brandsLogos = [];


  return (
    <Box className="search_container">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center",flexDirection:"column" }}>
        <Typography variant="h6" sx={{ marginRight: "1rem" }}>
          ¿Que marca para tu moto prefieres?
        </Typography>
        <RadioGroup value={selectedBrand} onChange={handleBrandChange} sx={{ display: "flex", flexDirection: "row" }}>
          {brands.map((brand, index) => (
            <FormControlLabel className="search_selector" key={index} value={brand} control={<Radio/>} sx={{
                border: '1px solid',
                borderColor: selectedBrand === brand ? '#323f83' : '#ccc',
                color: selectedBrand === brand ? '#323f83' : 'black',
              }} label={<img src={"/icons/brands/"+brand.toLowerCase()+".png"} className="brand_icon"/>} />
          ))}
          <FormControlLabel className="search_selector" value="" control={<Radio />} label="Todas" sx={{
                border: '1px solid',
                borderColor: selectedBrand === '' ? '#323f83' : '#ccc',
                color: selectedBrand === '' ? '#323f83' : 'black',
              }}/>
        </RadioGroup>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center",flexDirection:"column" }}>
        <Typography variant="h6" sx={{ marginRight: "1rem" }}>
          ¿A que cilindadras apuntas?
        </Typography>
        <RadioGroup value={selectedFeature} onChange={handleFeatureChange} sx={{ display: "flex", flexDirection: "row" }}>
          {features.map((feature, index) => (
            <FormControlLabel className="search_selector" key={index} value={feature} control={<Radio />} label={feature} sx={{
                border: '1px solid',
                borderColor: selectedFeature === feature ? '#323f83' : '#ccc',
                color: selectedFeature === feature ? '#323f83' : 'black',
              }} />
          ))}
          <FormControlLabel className="search_selector" value="" control={<Radio />} label="Cualquiera" sx={{
                border: '1px solid',
                borderColor: selectedFeature === '' ? '#323f83' : '#ccc',
                color: selectedFeature === '' ? '#323f83' : 'black',
              }} />
        </RadioGroup>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "50%" }}>
        <Typography variant="h6" sx={{ marginRight: "1rem" }}>
          Precio buscado:
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          step={10}
          sx={{ flexGrow: 1 }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <Button variant="contained" onClick={handleClearFilters} sx={{ marginRight: "1rem" }}>
          Clear Filters
        </Button>
        <Button variant="contained">Search</Button>
      </Box>
    </Box>
    </Box>
    
  );
};

export default ProductFilter;
