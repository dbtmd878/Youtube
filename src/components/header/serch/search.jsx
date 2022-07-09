import React, { useRef } from "react";
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

const Search = ({ searchVideos }) => {
  const input = useRef(null);
  const searchFnc = (value) => {
    if (value === "") {
      return;
    }
    searchVideos(value);
    input.current.value = "";
  };

  const enterFnc = (e) => {
    if (e.code !== "Enter") {
      return;
    }
    searchFnc(input.current.value);
  };
  const clickFnc = () => {
    searchFnc(input.current.value);
  };
  return (
    <SearchBox>
      <InputBox>
        <Input type="text" ref={input} onKeyDown={enterFnc} />
      </InputBox>
      <Button onClick={clickFnc}>
        <AiOutlineSearch />
      </Button>
    </SearchBox>
  );
};

export default Search;
