// import React from 'react';
// import InputBase from '@mui/material/InputBase';
// import styled from '@emotion/styled';
// import SearchIcon from '@mui/icons-material/Search'; // Importing the search icon from Material-UI
// import { alpha } from '@mui/material';

// export default function Searchbar() {
//   const SearchContainer = styled('div')(({ theme }) => ({
//     position: 'relative',
//     width: 300,
   
//     display: 'flex',
//     alignItems: 'center',
//   }));


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'gray',
//     width: '100%',
//     padding: '2px',
//     border: '0.1rem solid lightgray',
//     borderTopLeftRadius: '5px',
//     borderBottomLeftRadius: '5px',
//     borderTopRightRadius: '5px',
//     borderBottomRightRadius: '5px',

//     textAlign: 'center', 
//     boxSizing: 'border-box',
//     transition: 'border-color 0.3s ease', // Adding transition for smooth hover effect
//     "&:hover": {
//             backgroundColor: "lightgray"
//           },
//   }));
  



//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     position: 'absolute',
//     // left: "100%",
//     right:1,
//     top: '50%',
//     // padding:'3px',
//     cursor:'pointer',
//     display:'flex',
//     width:'4rem',
//     alignItems:'center',
//     justifyContent:'center',
//     display:'flex',
//     height:'37px',
//     borderTopRightRadius: '5px',
//     borderBottomRightRadius: '5px',
    
//     // border:'1px solid gray',
//     transform: 'translateY(-50%)',
//     background:"#FF6B6B",
//     // padding: theme.spacing(0, 2),
//     color: 'black', 
//   }));

//   return (
//     <SearchContainer>
//       <StyledInputBase
//         placeholder="Search…"
//         inputProps={{ 'aria-label': 'search' }}
//       />
//       <SearchIconWrapper>
//         <SearchIcon />
//       </SearchIconWrapper>
//     </SearchContainer>
//   );
// }

import React from 'react';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search'; // Importing the search icon from Material-UI
import { alpha } from '@mui/material';

export default function Searchbar() {
  const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: 300, // Set maximum width for larger screens
    margin: 'auto', // Center the container horizontally
    display: 'flex',
    alignItems: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'gray',
    flex: 1, // Allow input to take remaining space
    padding: '2px',
    border: '0.1rem solid lightgray',
    borderRadius: '5px',
    textAlign: 'center', 
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease', // Adding transition for smooth hover effect
    "&:hover": {
      borderColor: 'gray',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40, // Set a fixed width for the icon wrapper
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    background: '#FF6B6B',
    cursor: 'pointer',
    color: 'black',
  }));

  return (
    <SearchContainer>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
}
