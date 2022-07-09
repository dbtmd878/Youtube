import React from "react";
import styled from "styled-components";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import Search from "./serch/search";

const Head = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: skyblue;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const SearchBox = styled.div`
  display: flex;
  flex: 1;
  width: 35rem;
  background-color: red;
`;

const InfoBox = styled.div`
  flex: 1;
`;
const Logout = styled.button`
  padding: 0.8em;
  border-radius: 20%;
  background-color: white;
  color: black;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

const Header = ({ onLogout, searchVideos }) => {
  return (
    <Head>
      <TitleBox>
        <AiFillYoutube />
        <h1>YouTube</h1>
      </TitleBox>
      <SearchBox>
        <Search searchVideos={searchVideos} />
      </SearchBox>
      <InfoBox>
        {onLogout && <Logout onClick={onLogout}>Logout</Logout>}
      </InfoBox>
    </Head>
  );
};

export default Header;
