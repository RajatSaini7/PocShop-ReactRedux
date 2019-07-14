import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 354px;
  height: 56px;
  padding: 0px 10px;
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  background-size: cover;
  font-family: Arial;
  font-size: 14px;
  color: #474747;
  font-weight: 400;
  text-decoration: none solid rgb(71, 71, 71);
  margin-right: 2rem !important;
`;



const SearchBoxComponent = () => {

  return (
    <Input data-test="SearchBox" type="text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
  );

}

export default SearchBoxComponent;
