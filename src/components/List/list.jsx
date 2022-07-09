import React from "react";
import styled from "styled-components";

// Css
const UlBox = styled.ul`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  padding-left: 0;
  list-style: none;
`;
const LiBox = styled.li`
  box-sizing: border-box;
  width: 50%;
  padding: 0.5rem;
`;
const VideoBox = styled.div`
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  height: 100%;
  width: 100%;
`;
const MetaData = styled.div`
  width: 100%;
  margin-left: 0.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;
const Channel = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;
const Thumbnails = styled.img`
  width: 40%;
  height: 100%;
`;

const List = ({ videos }) => {
  const show = () => {
    return videos.map((item) => {
      if (typeof item.id == "object") {
        item.id = item.id[Object.keys(item.id)[1]];
      }

      return (
        <LiBox key={item.id}>
          <VideoBox>
            <Thumbnails
              alt="thumbnails"
              src={item.snippet.thumbnails.medium.url}
            />
            <MetaData>
              <Title>{item.snippet.title}</Title>
              <Channel>{item.snippet.channelTitle}</Channel>
            </MetaData>
          </VideoBox>
        </LiBox>
      );
    });
  };

  return <UlBox>{show()}</UlBox>;
};

export default List;
