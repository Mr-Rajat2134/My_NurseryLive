import { Box, Typography } from '@mui/material'
import './Available.css'
import React from 'react'
import ImgPlay from '../../images/ImgApplestore.jpg'
// import ImgApple from '../../../public/Assets/images/ImgPlaystore.jpg'

const Available = () => {
  return (
    <Box className='Textcontainer'>
        <Box  className='TextBox'   >
            <Typography  className='Text'>Happiness is availing great offers on Nurserylive App!</Typography>
            <Box   className='Imagges' >
            {/* <img src='' alt=""     />
            <img src=''  alt=""    /> */}
            <img src={ImgPlay} alt=""     />
            {/* <img src={ImgApple} alt=""    /> */}
        </Box>
        </Box>
      
      
    </Box>
  )
}

export default Available
