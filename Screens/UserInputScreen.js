import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert, Platform, ScrollView } from 'react-native';
import Card from '../Components/Card'
import Input from '../Components/Input'
import SelectedNumber from '../Components/SelectedNumber'
import TwoButtons from '../Components/TwoButtons'
import MainButton from '../Components/MainButton'



const UserInput = (props) => {

    const [enteredText, setenteredText] = useState('');

    const [isConfirmed, setisConfirmed] = useState(false);

    const [selectedNumber, setselectedNumber] = useState();

    const handleInput = (inputText) => {
        setenteredText(inputText.replace(/[^0-9]/g, ''))
    }

    const clearInput = () => {


        setenteredText('');

        setisConfirmed(false);

    }

    const confirmInput = () => {
        const enteredNumber = parseInt(enteredText);

        if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
            Alert.alert("Invalid Number!", 'Please Provide A Number Between 0 And 99!', [{ text: 'Okay', style: 'destructive', onPress: clearInput }])
            return;
        }

        setenteredText(enteredText);

        setisConfirmed(true);

        setselectedNumber(enteredNumber);

        Keyboard.dismiss();
    }

    const startGame = () => {
        props.onPresss(selectedNumber);
    }


    let confirmedOutput = null;

    if (isConfirmed) {
        confirmedOutput =
            <Card styles={{
                alignItems: "center",
                width: 200,
                height: 170,
                marginTop: 10
            }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ marginTop: 5, fontFamily: 'openSans-Regular', }}>You Selected the Number: </Text>
                    <SelectedNumber selectedNum={selectedNumber} />
                    <MainButton onPress={startGame}>
                        Start Game on {Platform.OS === 'android' ? "Android" : "IOS"}
                    </MainButton>
                </View>
            </Card>

    }

    return (

        <ScrollView>
            <KeyboardAvoidingView behavior="padding">


                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                    <View style={styles.inputScreen}>
                        <Text style={styles.screenTitle}>{props.screenTitle}</Text>

                        <Card styles={{
                            marginTop: 20,
                            width: 350, alignItems: "center",
                        }}>
                            <Input keyboardType="number-pad" maxLength={2} blurOnSubmit
                                autoCapitalize="none" autoCorrect={false} onChangeText={handleInput} value={enteredText} />

                            <TwoButtons title1="Reset" title2="Confirm" onPress1={clearInput} onPress2={confirmInput} />
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </ScrollView>

    );
};

/*

 <View style={styles.startBtn}>
                    <Button color={Colors.secondary} title="Start" />
                </View>


*/


const styles = StyleSheet.create({
    inputScreen: {
        padding: 10,
        flex: 1,
        alignItems: "center",
    },
    screenTitle: {
        fontSize: 20,
        fontFamily: 'openSans-Bold'
    },




});


export default UserInput;