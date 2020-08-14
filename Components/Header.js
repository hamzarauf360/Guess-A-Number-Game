import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Constants/Colors'



const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header:{
        backgroundColor:Colors.primary,
        justifyContent:'center', //along the y axis as by default its column wise
        alignItems:'center', // along the x axis cross-axis for column
        height:100, //height of view
        width:'100%', //width of view
      },
      headerText:{
        marginTop:25,
        fontSize:25, 
        fontFamily:'openSans-Bold',

        color:'#fff',
       
      },
  
});


export default Header;


