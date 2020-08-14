import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Alert,ScrollView } from 'react-native';
import Card from '../Components/Card'
import SelectedNumber from '../Components/SelectedNumber'
import { AntDesign } from '@expo/vector-icons'; 
import MainButton from '../Components/MainButton'
import Colors from '../Constants/Colors'



const generateRandomNumber = (min, max, exclude, attempts) => {

    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude && attempts === 0) {
        attempts = attempts + 1;
        return generateRandomNumber(min, max, exclude, attempts);
    }
    return randomNum;
}

const GuessNumber = (props) => {



    const min = useRef(1);


    const max = useRef(100);

    //state which will  counnt the number of tries in which answer was guessed


    const [attempts, setAttempts] = useState(0);

    // state which will store the opponet guess

    const initalGuess = generateRandomNumber(1, 100, props.userNum, attempts);
    const [opponentGuess, setopponentGuess] = useState(initalGuess);
    const [guessList, setGuessList] = useState([initalGuess]);



    useEffect(() => {
        if (opponentGuess === props.userNum) {
            props.overStatus(attempts);

        }
    });




    const guessNumberHandler = (direction) => {

        if (direction === 'smaller' && opponentGuess < props.userNum || direction === 'greater' && opponentGuess > props.userNum) {
            Alert.alert("Lie Detected!", "Don't Lie MR./MS.!", [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }



        else if (direction === 'smaller') {

            max.current = opponentGuess;

        }
        else if (direction === 'greater') {

            min.current = opponentGuess + 1;
        }

        const newAttempt = attempts + 1;

        const newNum = generateRandomNumber(min.current, max.current, props.userNum, attempts);

        setAttempts(newAttempt);

        setopponentGuess(newNum);

        setGuessList(curPartGuess => [newNum,...curPartGuess])

    }




    return (
        <View style={styles.restScreen}>


            <View style={styles.guessedNumberContainer}>
                <Card styles={
                    {
                        alignItems: 'center',
                        marginTop: 20,
                        width: 350
                    }
                }>

                    <Text style={styles.fontSizeStyle}>The Guessed Number is: </Text>

                    <SelectedNumber selectedNum={opponentGuess}></SelectedNumber>

                    <View style={styles.btnContainer}>

                        <MainButton onPress={() => guessNumberHandler('smaller')}>
                            <AntDesign name="caretdown" size={24} color='white' />
                        </MainButton>

                        <MainButton onPress={() => guessNumberHandler('greater')}>
                            <AntDesign name="caretup" size={24} color='white' />
                        </MainButton>

                    </View>

                </Card>


                <Card styles=
                    {{
                        alignItems: 'center',
                        marginTop: 20,
                        width: 350,flex:1,
                    }}>

                    <Text style={{
                        fontFamily: 'openSans-Bold', fontSize: 18
                    }}>
                        Computer Guess Log
                    </Text>
                    
                    <ScrollView > 

                        {
                            guessList.map((guess)=>( 
                                <View style={styles.logContainer} key={guess}><Text
                                style={{
                                    fontSize: 15,
                                    color: 'white',
                                }}>{guess}</Text></View>
                            
                            )
                            )
                        }
                        

                    </ScrollView>
                   
                   


                </Card>


            </View>


        </View>
    );

}



const styles = StyleSheet.create({
    restScreen: {
        flex: 1,
    },

  

    guessedNumberContainer: {
        alignItems: "center",
        flex:1,
    },
    fontSizeStyle: {
        fontSize: 18,
        fontFamily: 'openSans-Bold'

    },
    btnContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-around',
        width: '100%',
        marginLeft: 35,
    },
    logContainer:{
        justifyContent: "center",
        alignItems:'center',
        paddingLeft: 5,
        paddingTop: 20,
        width: 230,
        backgroundColor: Colors.primary,
        marginTop: 10,
        marginLeft:10,
    }

});


export default GuessNumber