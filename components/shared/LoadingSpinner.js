import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Text>Loading</Text>
    </Wrapper>
  );
};

export default LoadingSpinner;
