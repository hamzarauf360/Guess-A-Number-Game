import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';


const Input = (props) => {
    return (
        <View style={styles.inputArea}>

            <Text style={styles.inputLabel}>
                Enter A Number:
        </Text>
            <TextInput {...props} style={styles.userInputBox}  />
        </View>
    );
}

const styles = StyleSheet.create({
    inputArea: {
        alignItems: 'center',
        marginTop: 50,
    },
    inputLabel: {
        fontSize: 15,
        fontFamily:'openSans-Regular',
    },
    userInputBox: {
        marginLeft: 5,
        borderBottomWidth: 1,
        padding: 2,
        textAlign:"center",
        borderBottomColor: 'red',
        width:50,
    },
});



export default Input;