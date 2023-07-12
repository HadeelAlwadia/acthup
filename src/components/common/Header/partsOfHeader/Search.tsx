import React, { useState } from 'react'
import { SearchContineer, SearchIconWrapper, StyledInputBase } from './PartsOfHeader.style';
import SearchIcon from '@mui/icons-material/Search';
import { stringValue } from '../../../../@types';

const Search = () => {
  const [searchValue,setSearchValue]= useState('');
  const handleChangeSearchValue=(value:stringValue)=>{
    setSearchValue(value)
  }
  return (
    <SearchContineer sx={{width:'700px'}}>
       <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      value={searchValue}
      onChange={(e)=>handleChangeSearchValue(e.target.value)}
    />
  
  </SearchContineer>
  )
}

export default Search;
