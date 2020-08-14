import React from 'react';
import { StyleSheet, Text,View } from 'react-native';



const SelectedNumber = (props) => {
    return (
        <View style={{...styles.mainView,...props.styles}}>
            <Text style={styles.selectedNumberStyle}>{props.selectedNum}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    mainView:{
        marginTop:10,
        alignItems:"center",
        borderWidth:1,
        borderColor:'pink',
        padding:20,
        width:80,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,

    },
    selectedNumberStyle: {
        color: 'red',
    }
});


export default SelectedNumber;