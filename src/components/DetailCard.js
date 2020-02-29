import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions
} from "react-native";
import SubDetail from './SubDetail';
const {width, height } = Dimensions.get('window');

export default class DetailCard extends Component {
  constructor(props) {
    super(props);
  }
  loanTerms = (data)=>{
    let loanTerms =[];

    for(var i in data){
        loanTerms.push(<SubDetail title={i} data={data[i]}/>);
      }
      return loanTerms;
  }
  
  render() {
      const {data, title} = this.props;
    return (
      <View style={{ backgroundColor: '#fff', marginVertical: 5, padding: 10}}>
          <Text style={{alignSelf: 'flex-start' , fontWeight: 'bold', fontSize: 16, color:'black'}}>{title}</Text>
          { title === 'Repayment Schedule' ?
          data.map((item, index) => {
            return (<View key={String(index)} style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 5}}>
               <SubDetail title={'Date'} data={item.Date}/>
               <SubDetail title={'Amount'} data={item.Amount}/>
               </View>);
          }) : null}
          {title === 'Loan Terms' ?
          <View style={{flexDirection: 'row', flexWrap: 'wrap' }}>
              {this.loanTerms(data).map((item, index)=>{
            return <View style={{width: (width/2-20), marginVertical: 5}}>{item}</View>;
         })}
          </View>
         
          :  null}
           {title === 'Applicant Details' ?
          <View style={{flexDirection: 'row', flexWrap: 'wrap' }}>
              {this.loanTerms(data).map((item, index)=>{
            return <View style={{width: (width/2-20), marginVertical: 5}}>{item}</View>;
         })}
          </View>
         
          :  null}
           {title === 'Applicant Details' || title === 'Repayment Schedule'  ? <Text style={{alignSelf: 'flex-end' , fontWeight: 'bold', fontSize: 16, color:'#52b0f7'}}>{title === 'Repayment Schedule'? 'SEE FUll SCHEDULE' : title ==='Applicant Details'? 'SEE MORE' : ''}</Text> : null}
    </View>
    );
  }
}



