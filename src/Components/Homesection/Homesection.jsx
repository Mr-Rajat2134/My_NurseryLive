import React from 'react'
import './Homesection.css'
import { Box } from '@mui/material'
import {data} from '../../Dummydata'

const Homesection = () => {
  return (
    <Box className="top"   >
    {data.map((item) => (
      <img key={item.id} src={item.img}   className='img'  />
    ))}
  </Box>
  )
}

export default Homesection;



