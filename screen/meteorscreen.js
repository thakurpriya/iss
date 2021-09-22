import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

export default class MeteorScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}><Text>Meteor Screen</Text></View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c99b67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color: '#QA775F',
        fontStyle: 'coco',
    }
  });