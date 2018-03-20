import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
