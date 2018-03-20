import React, { Component } from 'react';

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

export default AddPlantForm;