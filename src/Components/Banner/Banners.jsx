



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Banner from '../images/Banners/Banner_1.jpg'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function RowAndColumnSpacing() {
//   return (
//     <Box sx={{ width: '100%', }}>
//       <Grid   sx={{p:'1rem'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
//         <Grid item xs={6}>
//   <img src={Banner} alt="" style={{borderRadius:"10px"}}  width={600} />
//         </Grid>
//         <Grid item xs={6}>
//         <img src={Banner} alt=""  style={{borderRadius:"10px"}}   width={600} />
//         </Grid>
//         <Grid item xs={6}>
//         <img src={Banner} alt=""  style={{borderRadius:"10px"}}  width={600} />
//         </Grid>
//         <Grid item xs={6}>
//         <img src={Banner} alt="" style={{borderRadius:"10px"}}   width={600} />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }




import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
// import Banner from '../images/Banners/Banner_1.jpg';


import Banner from '../images/Banners/Group011.jpg';
import Banner2 from '../images/Banners/Group012.jpg';

// import Banner4 from '../images/Banners/Banner_5.jpg';
// import Banner2 from '../images/Banners/Banner_6.jpg';
import './Banners.css'; 
import Theme from '../../Theme';

const BannerGrid = () => {
  return (
    <>
    <Box sx={{marginTop:'3rem'}} >
    <Typography sx={{textAlign:'center',marginTop:'2rem',fontSize:'2rem',color:Theme.palette.primary.Textlight,}}>Nursery & Landscaping Services </Typography> 
    <Typography sx={{textAlign:'center',marginTop:'1rem',fontSize:'0.9rem',color:Theme.palette.primary.Textlight,}}>At Heartyculture, we not only provide a vibrant selection of nurtured plants but also offer expert landscaping services to transform your outdoor spaces into lush, personalized gardens.  </Typography> 
    <Grid sx={{padding:'3rem'}}  container spacing={2}>

   
      <Grid item xs={12} sm={6}  >
      <Paper className="banner-paper">
     
          <img src={Banner} alt="Banner 1" className="banner-image" />
          <div className="banner-overlay">
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'25px',fontSize:'1.5rem',fontWeight:'700'}} >Our Nursery : Nurture 
          your Space With our Beautiful Plants </Typography>
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'17px'}} >Our diverse and expansive plant collection boasts an exhilarating array of verdant foliage, each meticulously cultivated to thrive in its own unique way." </Typography>
            <Button     variant="contained"  sx={{bgcolor:Theme.palette.primary.dark}}>Shop Now</Button>
          </div>
          </Paper>
      </Grid>
      <Grid item xs={12} sm={6}   >
        <Paper className="banner-paper">
          <img src={Banner2} alt="Banner 2" className="banner-image" />
          <div className="banner-overlay">
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'25px',fontSize:'1.5rem', fontWeight:'700'}} >Landscaping Services: Expertly Crafted Prices Tailored with Passion and Precision</Typography>
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'17px'}} >Our diverse and expansive plant collection boasts an exhilarating array of verdant foliage, each meticulously cultivated to thrive in its own unique way." </Typography>
            <Button variant="contained"   sx={{bgcolor:Theme.palette.primary.dark}}   >Shop Now</Button>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}   >
        <Paper className="banner-paper">
          <img src={Banner2} alt="Banner 2" className="banner-image" />
          <div className="banner-overlay">
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'25px',fontSize:'1.5rem', fontWeight:'700'}} >Landscaping Services: Expertly Crafted Prices Tailored with Passion and Precision</Typography>
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'17px'}} >Our diverse and expansive plant collection boasts an exhilarating array of verdant foliage, each meticulously cultivated to thrive in its own unique way." </Typography>
            <Button variant="contained"   sx={{bgcolor:Theme.palette.primary.dark}}   >Shop Now</Button>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}   >
        <Paper className="banner-paper">
          <img src={Banner2} alt="Banner 2" className="banner-image" />
          <div className="banner-overlay">
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'25px',fontSize:'1.5rem', fontWeight:'700'}} >Landscaping Services: Expertly Crafted Prices Tailored with Passion and Precision</Typography>
          <Typography   sx={{color:Theme.palette.primary.main, textAlign:'left',alignContent:'left',marginBottom:'1rem', lineHeight:'17px'}} >Our diverse and expansive plant collection boasts an exhilarating array of verdant foliage, each meticulously cultivated to thrive in its own unique way." </Typography>
            <Button variant="contained"   sx={{bgcolor:Theme.palette.primary.dark}}   >Shop Now</Button>
          </div>
        </Paper>
      </Grid>
      
      
    </Grid>
    </Box>
    </>
  );
};

export default BannerGrid;


// import React from 'react';
// import { Button, Grid, Paper, Typography } from '@mui/material';
// import Banner from '../images/Banners/Banner_1.jpg';
// import Banner3 from '../images/Banners/Banner_6.jpg';
// import Banner4 from '../images/Banners/Banner_5.jpg';
// import Banner2 from '../images/Banners/Banner_6.jpg';
// import './Banners.css'; 
// import theme from '../../Theme';

// const BannerGrid = () => {
//   const handleButtonClick = () => {
//     // Action to perform when the button is clicked
//     console.log("Button clicked");
//   };

//   return (
//     <Grid sx={{padding:'2rem'}} container spacing={1}>
//       <Grid item xs={12} sm={6}>
//         <Paper className="banner-paper">
//           <img src={Banner} alt="Banner 1" className="banner-image"  width={300}   />
//           <div className="banner-overlay">
//           <Typography  sx={{color:theme.palette.primary.main  }}  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia rem numquam vel ab enim labore quas corrupti quasi ut cumque provident commodi, recusandae error sint quos culpa temporibus iste vero!</Typography>
//             <Button variant="contained" color="primary" onClick={handleButtonClick}>Shop Now</Button>
           
//           </div>
//         </Paper>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Paper className="banner-paper">
//           <img src={Banner2} alt="Banner 2" className="banner-image" width={300}     />
//           <div className="banner-overlay">
//           <Typography  sx={{color:theme.palette.primary.main  }}  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia rem numquam vel ab enim labore quas corrupti quasi ut cumque provident commodi, recusandae error sint quos culpa temporibus iste vero!</Typography>
//             <Button variant="contained" color="primary" onClick={handleButtonClick}>Shop Now</Button>
//           </div>
//         </Paper>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Paper className="banner-paper">
//           <img src={Banner3} alt="Banner 3" className="banner-image"width={300}   />
//           <Typography  sx={{color:theme.palette.primary.main  }}  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia rem numquam vel ab enim labore quas corrupti quasi ut cumque provident commodi, recusandae error sint quos culpa temporibus iste vero!</Typography>
//           <div className="banner-overlay">
//             <Button variant="contained" color="primary" onClick={handleButtonClick}>Shop Now</Button>
//           </div>
//         </Paper>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Paper className="banner-paper">
//           <img src={Banner4} alt="Banner 4" className="banner-image"width={300}   />
//           <div className="banner-overlay">
//           <Typography  sx={{color:theme.palette.primary.main  }}  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia rem numquam vel ab enim labore quas corrupti quasi ut cumque provident commodi, recusandae error sint quos culpa temporibus iste vero!</Typography>
//             <Button variant="contained" onClick={handleButtonClick}>Shop Now</Button>
//           </div>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default BannerGrid;
