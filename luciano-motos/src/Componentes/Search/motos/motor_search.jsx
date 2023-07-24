import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Typography, RadioGroup, FormControlLabel, FormGroup, Radio, Slider, Button, Switch } from "@mui/material";
import { Search } from '@mui/icons-material';
import "./motor_search.css";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import axios from 'axios';

const ProductFilter = () => {
  useEffect(() => {
    // Function to execute on component startup
    fetchBrands();
  }, []);

  const navigate = useNavigate();

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedUsageStatus, setSelectedUsageStatus] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const [isFinancingRequired,setFinancingRequirement] = useState(true);


  const [brands,setBrandList] = useState([]);
  //const brands = ["Honda", "Benelli", "Yamaha", "Suzuki", "Gilera","Keller","Kiden","Haojue","Hero","Guerrero","Voge","Bajaj","Motomel"];
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

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -100,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 100,
      behavior: 'smooth',
    });
  };

  const fetchBrands = async () => {
    // Fetch options from an API using Axios
    const params = {}
    axios.post('https://lucianomotos.com/fetch/brands/',params)
    .then(response => {
      // Handle the response data here
      if(response.status) {
        setBrandList(response.data);
      }
    })
    .catch(error => {
      // Handle any errors here
      console.warn(error);
    });
  }

  const brandsLogos = [];


  return (
    <Box className="search_container">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center",flexDirection:"column", width: "-webkit-fill-available" }}>
        <div className="scroll_container">
        <div className="arrow arrow-left scroll-arrow left" onClick={() => scrollLeft()}>
          <ArrowLeftIcon />
        </div>
        <RadioGroup value={selectedBrand} onChange={handleBrandChange} className="brands_container" id="brand_selector" ref={scrollContainerRef}>
        <FormControlLabel className="search_selector" value="" control={<Radio />} label="Todas las marcas" sx={{
                border: '1px solid',
                borderColor: selectedBrand === '' ? '#323f83' : '#ccc',
                color: selectedBrand === '' ? '#323f83' : 'black',
                margin: "5px",
                width: "max-content !important",
                display: "block !important",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
                textAlign:"center"
              }}/>
          {brands.map((brand, index) => (
            <FormControlLabel className="search_selector" key={index} value={brand.brand_id} control={<Radio/>} sx={{
                border: '1px solid',
                borderColor: selectedBrand === brand ? '#323f83' : '#ccc',
                color: selectedBrand === brand ? '#323f83' : 'black',
                margin: "5px",
                width: "100px",
                height: "50px",
              }} label={<img src={"https://lucianomotos.com/brands_logos/"+brand.name.toLowerCase()+".png"} className="brand_icon"/>} />
          ))}
          
        </RadioGroup>
        <div className="arrow arrow-right scroll-arrow right" onClick={() => scrollRight()}>
          <ArrowRightIcon />
        </div>
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
