import React, { Component } from "react";
import {
  Text,
  View
} from "react-native";

export default class SubDetail extends Component {
  constructor(props) {
    super(props);
  }


  
  render() {
      const {title, data} = this.props;
    return (
      <View style={{flex: 1}}>
          <Text style={{color: 'grey'}}>{title}</Text>
    <Text style={{color: 'black'}}>{data}</Text>
    </View>
    );
  }
}
