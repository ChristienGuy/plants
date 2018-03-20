import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  DatePickerAndroid
} from "react-native";
import styled from "styled-components";

// Custom Component imports
import AddPlantForm from "./AddPlantForm";
import Layout from "../shared/Layout";
import DateInput from "../shared/DateInput";

const AddNewScreen = ({ addPlant }) => {
  return (
    <Layout>
      <AddPlantForm addPlant={addPlant} />
    </Layout>
  );
};

const InputLabel = styled.Text`
  margin-bottom: 10px;
`;

const InputWrapper = styled.View`
  margin-bottom: 30px;
`;


export default AddNewScreen;
