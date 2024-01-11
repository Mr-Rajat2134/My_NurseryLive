import { Box, Typography } from '@mui/material'
import './Available.css'
import React from 'react'
import ImgPlay from '../../Images/ImgPlaystore.avif'
import ImgApple from '../../Images/ImgApplestore.avif'

const Available = () => {
  return (
    <Box className='Textcontainer'>
        <Box  className='TextBox'   >
            <Typography  className='Text'>Happiness is availing great offers on Nurserylive App!</Typography>
            <Box   className='Imagges' >
            <img src={ImgPlay} alt=""     />
            <img src={ImgApple} alt=""    />
        </Box>
        </Box>
      
      
    </Box>
  )
}

export default Available
