import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

export default class AppHeader extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Meteor Shower
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     marginTop:0,
      backgroundColor: '#E0F2F7',
     
 
    },
    text:{
        marginTop:0,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0080FF',
        fontSize:30,
        fontWeight:800,
        letteSpacing: 5,
        fontFamily: 'ChalkboardSE-Bold',    
     
    }
  });