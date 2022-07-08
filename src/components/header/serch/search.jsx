import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = styled.div`
  width: 100%;
  display: flex;
`;
const InputBox = styled.div`
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  padding-top: 0.3rem;
`;

const Search = () => {
  return (
    <SearchBox>
      <InputBox>
        <Input type="text" />
      </InputBox>
      <Button>
        <AiOutlineSearch />
      </Button>
    </SearchBox>
  );
};

export default Search;
