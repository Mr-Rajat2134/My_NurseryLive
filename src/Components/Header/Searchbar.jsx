import React from 'react';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search'; // Importing the search icon from Material-UI

export default function Searchbar() {
  const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    width: 300,
   
    display: 'flex',
    alignItems: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'gray',
    width: '100%',
    padding:'2px',
    border: '0.1rem solid lightgray',
    borderRadius: '5px',
    textAlign: 'center', 
    // padding: theme.spacing(0, 2),
    boxSizing: 'border-box', 
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    // left: "100%",
    right:1,
    top: '50%',
    // padding:'3px',
    display:'flex',
    width:'3rem',
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    height:'37px',
    
    // border:'1px solid gray',
    transform: 'translateY(-50%)',
    background:"#FF6B6B",
    // padding: theme.spacing(0, 2),
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

