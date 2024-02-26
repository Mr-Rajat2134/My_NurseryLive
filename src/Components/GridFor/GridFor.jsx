// import * as React from "react";
// import Box from "@mui/material/Box";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import Theme from "../../Theme";
// import { Typography } from "@mui/material";
// // import { Scale } from "@mui/icons-material";

// export default function MasonryImageList() {
//   const { palette } = Theme;
//   return (
//     <Box sx={{ width: "100%", marginTop: "2rem" }}>
//       <Box
//         sx={{
//           minHeightheight: 450,
//           padding: "2rem",
//           borderRadius: "2rem",
//           backgroundColor: palette.primary.main,
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: "center" }}>
//           Garden Decor & Care Adviser
//         </Typography>
//         <ImageList variant="masonry" cols={4} gap={10}>
//           {itemData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//     </Box>
//   );
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1621948470827-d245077791aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9sb3dlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
//     title: "Bed",
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
//     img: "https://plus.unsplash.com/premium_photo-1683134213628-b40ba2c99af8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Blinds",
//   },

//   {
//     img: "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Laptop",
//   },
// ];




import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Theme from "../../Theme";
import { Typography } from "@mui/material";
import "./Gridfor.css"; // Import the CSS file

export default function MasonryImageList() {
  const { palette } = Theme;
  return (
    <Box className="MasonryImageList-container">
      <Box className="MasonryImageList-box">
        <Typography variant="h5" className="MasonryImageList-title">
          Garden Decor & Care Adviser
        </Typography>
        <ImageList className="MasonryImageList-list" variant="masonry" cols={4} gap={10}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className="MasonryImageList-item">
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className="MasonryImageList-img"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1621948470827-d245077791aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9sb3dlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    title: "Bed",
  },
  {
        img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
        title: "Books",
      },
      {
        img: "https://images.unsplash.com/photo-1703113690930-fc391676e0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Sink",
      },
      {
        img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        title: "Kitchen",
      },
      {
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Blinds",
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1683134213628-b40ba2c99af8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Blinds",
      },
    
      {
        img: "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Laptop",
      },
  // Add more item data here...
];
