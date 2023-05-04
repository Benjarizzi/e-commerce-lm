import "./ItemList.css";
import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import axios from "axios";

const ItemListContainer = () => {
  return (
    <div>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer