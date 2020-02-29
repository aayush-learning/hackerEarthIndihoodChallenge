import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

class HomeScreen extends PureComponent {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Details')}
        style={{backgroundColor: 'brown'}}
      >
        <Text style={{paddingHorizontal: 20, paddingVertical: 10, fontWeight: 'bold', fontSize: 16, color: 'white'}}>
          Go to Loan Details
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
}



export default connect(
  null,
  null
)(HomeScreen);

