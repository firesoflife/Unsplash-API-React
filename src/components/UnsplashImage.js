import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;
`;

const UnsplashImage = ({ url, key }) => {
  return <Img src={url} key={key} />;
};

export default UnsplashImage;
