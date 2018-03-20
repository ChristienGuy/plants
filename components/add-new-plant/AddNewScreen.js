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
class AddPlantForm extends Component<Props> {
  state = {
    name: "",
    daysBetweenWater: "",
    notes: "",
    lastWatered: new Date()
  };

  addNewPlant = () => {
    const { addPlant } = this.props;
    const { name, daysBetweenWater, lastWatered, notes } = this.state;

    addPlant({
      name,
      daysBetweenWater,
      lastWatered,
      notes
    });
  };

  handleDateChange = date => {
    this.setState({
      lastWatered: date
    });
  };

  render() {
    return (
      <View>
        <InputWrapper>
          <InputLabel>What's this plants name?</InputLabel>
          <TextInput
            name="name"
            value={this.state.name}
            onChangeText={name => {
              this.setState({ name });
            }}
            placeholder="Name"
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>How many days between watering?</InputLabel>
          <TextInput
            name="waterSchedule"
            value={this.state.daysBetweenWater}
            keyboardType="numeric"
            onChangeText={daysBetweenWater => {
              this.setState({ daysBetweenWater });
            }}
            placeholder="Days between watering"
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>When was it last watered?</InputLabel>
          <DateInput onChangeDate={this.handleDateChange} />
        </InputWrapper>
        <Button title="Add new plant" onPress={this.addNewPlant} />
      </View>
    );
  }
}

export default AddNewScreen;
