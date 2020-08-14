import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors'


const MainButton = (props) => {

    return(
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.strtBtn}>
            <Text style={styles.btnTxt}>
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    strtBtn: {
        marginTop: 20,
        marginLeft: 10,
        paddingHorizontal:15,
        paddingVertical:2,
        borderRadius:25,
        backgroundColor:Colors.primary
    },
    btnTxt:{
        marginLeft:5,
        marginRight:5,

        color:'white',
        fontFamily:'openSans-Regular',
        fontSize:15,
        textAlign:'center'
    }

});


export default MainButton;
