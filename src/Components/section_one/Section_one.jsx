import React from 'react'
import './Section_one.css'
import PlantCards from '../PlantCards/PlantCards'
import Slider from '../Slider/Slider'
import { Grid, Typography } from '@mui/material'
// import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import GridFor from '../GridFor/GridFor'


export default function Section_one() {
  return (
    <div id='section_one' >
 <Typography  variant='h5'    sx={{
  // marginLeft:'2rem',
    fontSize:'1.5rem', textAlign:'center',marginBottom:'1rem' }}  >

Our Top Selling Plants  

 </Typography>
      <PlantCards/>
      {/* <GridFor/> */}
    </div>
  )
}
