import React from 'react'
import './UnicProducts.css'
import { Box, Button, Card } from '@mui/material'
import Theme from '../../Theme'
export default function UnicProduct() {
  return (

    <Box sx={{bgcolor:'#F8F8F8',  padding:'1rem',  borderRadius:  '150px 150px 10px 0px', }}  >
    <div className="wrapper">
    <div className="product-img">
      <img src="https://media.istockphoto.com/id/1503373282/photo/plants-in-pots-decorate-the-garden-to-purify-the-air-cut-out-isolated-white-background-with.jpg?s=612x612&w=0&k=20&c=9Uko52yeSih0oBymtljhI5GpLcpXMXYtSesiGy1bs-k=" height={420} width={500} />
    </div>
    <div className="product-info">


        <Card  sx={{borderRadius:'1rem',  boxShadow:0  }}     >
      <div className="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>
          Harvest Vases are a reinterpretation
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga voluptates omnis quod dolorem consequuntur voluptate minima a eligendi saepe necessitatibus ullam delectus, doloremque, aperiam asperiores neque incidunt et. Alias.
        </p>
      </div>
      <div className="product-price-btn">
        <p>
          {/* <span>78</span> */}
        </p>
        {/* <button type="button">buy now</button> */}
        <Button    size='small'  variant="contained"  sx={{marginLeft:'5rem',borderRadius:'0.3rem',bgcolor: Theme.palette.primary.light , '&:hover': {
          bgcolor: Theme.palette.primary.Hoverlight,
        } }}   >Add to Card</Button>
      </div>

      </Card>
    </div>
  </div>
  </Box>
  
  )
}
