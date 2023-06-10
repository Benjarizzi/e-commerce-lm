import "../global/global.css";
import "../global/fonts.css";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ItemList from "../ItemList/ItemList"
import axios from 'axios';
import { Box, Grid, Button, Radio, FormControlLabel, FormGroup, Switch } from "@mui/material";
import "./Motos.css"

const Motos = () => {
  const [data, setData] = useState({
    products: [],
    product_type: ''
  });

  const location = useLocation();
  let params = location.state;
  if(params == null) {
    params = {};
  }
  console.log(params);
  
  //const [isFinancingRequired,setFinancingRequirement] = useState(params.finance_req);

  const mainContainerRef = useRef(null);
  useEffect(() => {
    getMotos();
    if (mainContainerRef.current) {
      mainContainerRef.current.style.height = `${mainContainerRef.current.scrollHeight}px`;
    }
  },[]);

  
  
  const getMotos = () => {

    axios.post('http://localhost:8000/fetch/motorbikes/',params)
    .then(response => {
      // Handle the response data here
      setData(prevData => ({
        ...prevData,
        products: response.data,  // Update the 'products' property
        product_type: 'moto'
      }));
      
    })
    .catch(error => {
      // Handle any errors here
      console.warn(error);
    });

    
  }

  return (
    <Box sx={{width: "-webkit-fill-available",position:"relative",height:"1000px",top:"60px",fontFamily:"Kanit"}} ref={mainContainerRef}>
      <Grid container spacing={2} sx={{width:"-webkit-fill-available",position:"absolute",top:"75px"}}>
      <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
        <h2>Motos {params.brand}</h2>
        <Button>Crear alerta</Button>
      </Grid>
      <Grid item xs={12} md={8}>
        <ItemList payload={data}/>
      </Grid>
    </Grid>
        
    </Box>
  )
  
}

export default Motos