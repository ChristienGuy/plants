import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, Platform } from "react-native";
import PropTypes from "prop-types";
import { format } from "date-fns";
import DateTimePicker from "react-native-modal-datetime-picker";
import styled from "styled-components";

const DatePickerStates = {
  OPEN: "open",
  CLOSED: "closed"
};

const FieldStates = {
  PRISTINE: "pristine",
  UNCHANGED: "unchanged",
  DIRTY: "dirty"
};

const DateText = styled.Text`
  color: ${props =>
    props.fieldState === FieldStates.PRISTINE ? "#d1d1d1" : "#000"};
`;

class DateInput extends Component {
  state = {
    chosenDate: new Date(),
    datePickerState: DatePickerStates.CLOSED,
    fieldState: FieldStates.PRISTINE
  };

  showDatePicker = () => {
    this.setState({ datePickerState: DatePickerStates.OPEN });
  };

  hideDatePicker = () => {
    this.setState({
      datePickerState: DatePickerStates.CLOSED,
      fieldState: FieldStates.PRISTINE
    });
  };

  handleDatePicked = chosenDate => {
    this.setState({
      chosenDate,
      datePickerState: DatePickerStates.CLOSED,
      fieldState: FieldStates.DIRTY
    });
    this.props.onChangeDate(chosenDate);
  };

  render() {
    const { chosenDate, datePickerState, fieldState } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={this.showDatePicker}>
          <DateText fieldState={fieldState}>
            {format(chosenDate, "MMMM-DD-YYYY")}
          </DateText>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={datePickerState === DatePickerStates.OPEN}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
          mode="date"
        />
      </View>
    );
  }
}

DateInput.propTypes = {
  onChangeDate: PropTypes.func
};

export default DateInput;
