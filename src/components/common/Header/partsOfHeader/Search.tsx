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
    <SearchContineer action={`./search`} onSubmit={(e)=>{
e.preventDefault();
window.location.href=`/search/${searchValue}`

    }}  >
       <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      value={searchValue}
      name='word'
      onChange={(e)=>handleChangeSearchValue(e.target.value)}
    />
  
  </SearchContineer>
  )
}

export default Search;
