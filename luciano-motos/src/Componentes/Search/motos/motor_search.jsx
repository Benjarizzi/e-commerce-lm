import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Typography, RadioGroup, FormControlLabel, FormGroup, Radio, Slider, Button, Switch } from "@mui/material";
import { Search } from '@mui/icons-material';
import "./motor_search.css";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ProductFilter = () => {

  const navigate = useNavigate();

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedUsageStatus, setSelectedUsageStatus] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const [isFinancingRequired,setFinancingRequirement] = useState(true);

  const brands = ["Honda", "Benelli", "Yamaha", "Suzuki", "Mondial"];
  const features = ["400cc", "200cc", "150cc", "125cc", "110cc"];

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleUsageStatusChange = (event) => {
    console.log(event.target.value)
    setSelectedUsageStatus(event.target.value);
  };

  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleFinancingFilterChange = (event) => {
    setFinancingRequirement(event.target.value);
  }


  const handleClearFilters = () => {
    setSelectedBrand("");
    setSelectedFeature("");
    setPriceRange([0, 1000]);
  };

  const doSearch = () => {
    const params = {"brand":selectedBrand,"usage_req":selectedUsageStatus,"financing_req":isFinancingRequired};
    console.log(params);
    navigate('/motos/',{state:params});
  }

  //Scroll brands
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollWidth > clientWidth && scrollLeft > 0);
      setShowRightArrow(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth);
    }
  }, [scrollLeft]);

  const handleArrowClick = (direction) => {
    const scrollAmount = direction === 'left' ? -containerRef.current.clientWidth : containerRef.current.clientWidth;
    setScrollLeft(scrollLeft + scrollAmount);
  };

  const handleTouchStart = (event) => {
    const touchStartX = event.touches[0].clientX;
    const touchStartY = event.touches[0].clientY;
    const handleTouchMove = (event) => {
      const touchMoveX = event.touches[0].clientX;
      const touchMoveY = event.touches[0].clientY;
      const deltaX = touchMoveX - touchStartX;
      const deltaY = touchMoveY - touchStartY;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        event.preventDefault();
        setScrollLeft(scrollLeft - deltaX);
      }
    };
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };


  const brandsLogos = [];


  return (
    <Box className="search_container">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center",flexDirection:"column" }}>
        <div className="scroll_container">
        {showLeftArrow && (
        <div className="arrow arrow-left" onClick={() => handleArrowClick('left')}>
          <ArrowLeftIcon />
        </div>
      )}
        <RadioGroup value={selectedBrand} onChange={handleBrandChange} className="brands_container" id="brand_selector">
          {brands.map((brand, index) => (
            <FormControlLabel className="search_selector" key={index} value={brand} control={<Radio/>} sx={{
                border: '1px solid',
                borderColor: selectedBrand === brand ? '#323f83' : '#ccc',
                color: selectedBrand === brand ? '#323f83' : 'black',
                margin: "5px",
                width: "100px",
                height: "50px",
              }} label={<img src={"/icons/brands/"+brand.toLowerCase()+".png"} className="brand_icon"/>} />
          ))}
          <FormControlLabel className="search_selector" value="" control={<Radio />} label="Todas las marcas" sx={{
                border: '1px solid',
                borderColor: selectedBrand === '' ? '#323f83' : '#ccc',
                color: selectedBrand === '' ? '#323f83' : 'black',
                margin: "5px",
                width: "100px",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
                textAlign:"center"
              }}/>
        </RadioGroup>
        {showRightArrow && (
        <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>
          <ArrowRightIcon />
        </div>
        )}
        </div>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginTop: "1rem", "width": "-webkit-fill-available", justifyContent: "space-between" }}>
        <Box sx={{display:"flex",alignItems:"center"}}>
        <RadioGroup value={selectedUsageStatus} onChange={handleUsageStatusChange} id="usage_status_selector" sx={{"flexDirection":"row"}}>
          <FormControlLabel className="search_selector" value="0km" control={<Radio />} label="0km" sx={{
                border: '1px solid',
                borderColor: selectedUsageStatus === '' ? '#323f83' : '#ccc',
                color: selectedUsageStatus === '' ? '#323f83' : 'black',
                margin: "5px",
                alignItems: "center",
                justifyContent: "center",
                textAlign:"center"
              }}/>
              <FormControlLabel className="search_selector" value="used" control={<Radio />} label="Usadas" sx={{
                border: '1px solid',
                borderColor: selectedUsageStatus === '' ? '#323f83' : '#ccc',
                color: selectedUsageStatus === '' ? '#323f83' : 'black',
                margin: "5px",
                alignItems: "center",
                justifyContent: "center",
                textAlign:"center"
              }}/>
              <FormControlLabel className="search_selector" value="" control={<Radio />} label="Todas" sx={{
                border: '1px solid',
                borderColor: selectedUsageStatus === '' ? '#323f83' : '#ccc',
                color: selectedUsageStatus === '' ? '#323f83' : 'black',
                margin: "5px",
                alignItems: "center",
                justifyContent: "center",
                textAlign:"center"
              }}/>
        </RadioGroup>
        <FormGroup onChange={handleFinancingFilterChange} sx={{marginLeft:"5px"}}>
        <FormControlLabel value={isFinancingRequired} control={<Switch />}  label="Financiable" />
        </FormGroup>
        </Box>
      
        
        <Button variant="contained" onClick={doSearch}>
          <Search />
          Buscar</Button>
      </Box>
    </Box>
    </Box>
    
  );
};

export default ProductFilter;
