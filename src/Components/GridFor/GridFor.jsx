

// import * as React from "react";
// import Box from "@mui/material/Box";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import Theme from "../../Theme";
// import { Divider, Grid, Typography } from "@mui/material";
// import "./Gridfor.css"; // Import the CSS file
// // import CareAdviser from "../CareAdviser/careAdviser";
// import { TypeAnimation } from "react-type-animation";

// export default function MasonryImageList() {
//   const { palette } = Theme;
//   return (

//     <>  
    
    
//      <Box className="MasonryImageList-container">
      
//       <Box className="MasonryImageList-box">
     
//         {/* <p className="MasonryImageList-title">Plant Care Tips & Guidance 
//         </p> */}
//         <Typography   sx={{fontSize:'1.5rem', textAlign:'center', marginBottom:'1rem'}}  >Plant Care Tips & Guidance </Typography>

//         <Grid container spacing={2}>
//           {itemData.map((item) => (
//             <Grid
//               item
//               spacing={1}
//               sm={12}
//               xs={12}
//               md={2}
//               lg={4}
//               key={item.img}
//               className="MasonryImageList-item"
//             >
//               <img
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 alt={item.title}
//                 loading="lazy"
//                 className="MasonryImageList-img"
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
  

  

//     </Box>
   
//       </>
 
//   );
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Blinds",
//   },
//   {
//     img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
//     title: "Books",
//   },
//   {
//     img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
//     title: "Books",
//   },
//   {
//     img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
//     title: "Books",
//   },
//   {
//     img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
//     title: "Books",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1703113690930-fc391676e0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Sink",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
//     title: "Kitchen",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Blinds",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Blinds",
//   },


// ];




import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PlantCare } from '../../Dummydata';
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Theme from '../../Theme';

export default function GridFor() {
  return (
    <div>
      <Typography sx={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' ,marginTop:'2rem'}}>Plant Care Tips & Guidance</Typography>
<Box   sx={{display:'flex', flexDirection:'row', gap:'1.5rem',justifyContent:'center' }} >     
 {PlantCare.map((item, index) => (
      
        <Card key={index} sx={{ maxWidth: 375 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={item.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6"  sx={{textAlign:'center'}} component="div">
            {item.Title}
            </Typography>
            <Typography  sx={{textAlign:'center'}}  variant="body2" color="text.secondary">
            {item.Desc}
            </Typography>
          </CardContent>
          <CardActions>
      
            <Button     sx={{    color:Theme.palette.primary.light,  '&:hover': {
          bgcolor: Theme.palette.primary.Hoverlight, // Change bgcolor on hover
        },}} size="small">Read More
        <ArrowForwardIcon   sx={{    color:Theme.palette.primary.light,  '&:hover': {
          bgcolor: Theme.palette.primary.Hoverlight, // Change bgcolor on hover
        },}}     /></Button>
          </CardActions>
        </Card>


      ))}
              </Box>
    </div>
  );
}
