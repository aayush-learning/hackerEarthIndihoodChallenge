import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import DetailCard from '../components/DetailCard';
import {record} from '../assets/Record';
const {width, height } = Dimensions.get('window');
import MapView from 'react-native-maps'

class DetailScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f0f2e9'}}>
        <View style={{height: 200,width: width, backgroundColor: 'grey' }}>
        <Image source={{uri: record.loan1.image.url}} resizeMethod='resize' resizeMode='stretch'style={{height: 200,width: width, backgroundColor: 'grey', flex:1 }}/>
        <View style={{backgroundColor: 'grey', height: 60, width: 60, position: 'absolute', left: 20, bottom: -20}}>
        <MapView style={{flex: 1}}  region={{ latitude: record.loan1['Borrower Location']['lat'], longitude: record.loan1['Borrower Location']['lng'], latitudeDelta: 1.922, longitudeDelta: 1.0421  }} showsUserLocation={true}/>  
        </View>
        <View style={{position: 'absolute', left: 90, bottom: 5, height: 40 ,  width: width-100}}>
          <Text style={{ color: 'white',fontWeight: 'bold', fontSize: 12}}>{record.loan1.image.label}</Text>
          <Text style={{ color: 'white', fontSize: 10}}>{record.loan1['Borrower Location']['address']}</Text>
        </View>
        </View>
        <View style={{padding: 10, marginTop: 10}}>
          <DetailCard data={record.loan1['Applicant Details']} title={'Applicant Details'}/>
          <DetailCard data={record.loan1['Loan Terms']} title={'Loan Terms'}/>
          <DetailCard data={record.loan1['Repayment Schedule']} title={'Repayment Schedule'}/>
        </View>
    </ScrollView>
    );
  }
}

export default connect(
  null,
  null
)(DetailScreen);


