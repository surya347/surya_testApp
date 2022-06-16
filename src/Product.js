import React,{ useState } from 'react';
import './Login.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Select, { SelectChangeEvent } from '@material-ui/core';



const Product = () => {



 const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [quantity1, setQuantity1] = useState("");
  const [quantity2, setQuantity2] = useState("");
  const [pump, setPump] = useState("");
  const [filter, setFilter] = useState("");
 

  const handleProduct1 = (e) => {
    setProduct1(e.target.value);
  };


  const handleProduct2 =  (e) => {
    setProduct2(e.target.value);
    // console.log("pump:"+JSON.stringify(pump));
  }



  const handleQuantity1 =  (e) => {
    setQuantity1(e.target.value);
    // console.log("pump:"+JSON.stringify(pump));
  }

  const handleQuantity2 =  (e) => {
    setQuantity2(e.target.value);
    // console.log("filter:"+JSON.stringify(filter));

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("product1:"+JSON.stringify(product1));
    console.log("product2:"+JSON.stringify(product2));
    console.log("quantity1:"+JSON.stringify(quantity1));
    console.log("quantity2:"+JSON.stringify(quantity2));
}


  return (
    <div>
        <div className="login">
        <div className="form">
            <form className="login-form">
            <span className="material-icons">Cart</span>
            <div className='dropdown'>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={product1}
                label="product1"
                onChange={handleProduct1}
            >
                <MenuItem value=""> <em>None</em></MenuItem>
                <MenuItem value="pump">Pump</MenuItem>
                <MenuItem value="filter">Filter</MenuItem>
            </Select>
            </FormControl>
            {/* <select name="selectList" id="selectList" onChange={handleProduct1}>
                <option value={product1}>Pump</option>
                <option value={product2}>Filter</option>
            </select> */}
            </div>
            <input type="text"
                placeholder="Quantity" 
                name="quantity1"
                value={quantity1}
                onChange={handleQuantity1}
                required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />

            <div className='dropdown'>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={product2}
                label="product2"
                onChange={handleProduct2}
            >
                <MenuItem value=""> <em>None</em></MenuItem>
                <MenuItem value="pump">Pump</MenuItem>
                <MenuItem value="filter">Filter</MenuItem>
            </Select>
            </FormControl>
            </div>

            <input type="text" 
                placeholder="Quantity"
                name="quantity2"
                value={quantity2} 
                onChange={handleQuantity2}
                required />

            <button onClick={handleSubmit}>Submit</button>
            </form>  
    </div>
    </div>

    </div>
  )
}

export default Product;