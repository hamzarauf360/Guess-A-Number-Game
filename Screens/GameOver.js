import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native';
import React from 'react'
import Card from '../Components/Card'
import SelectedNumber from '../Components/SelectedNumber'
import DefaultStyles from '../Constants/DefaultStyles'
import MainButton from '../Components/MainButton'

/*  
*/

const GameOver = (props) => {
    return (
        <ScrollView>
        <View style={styles.mainContainer}>
            <View style={{...DefaultStyles.imgContainer,marginLeft:props.propImgStyle}}>
                <Image source={require('../assets/success.png')} style={DefaultStyles.imgStyle} resizeMode='cover' />
            </View>
            <View style={styles.overContainer}>
                <Card styles={{ width: 350, alignItems: 'center', marginTop: 20, height: 350 }}>
                    <View style={styles.textContainer}>
                        <Text style={{ fontSize: 20, fontFamily: 'openSans-Bold' }}>
                            Game Over!
                        </Text>
                        <View style={styles.gameOverContainer}>
                            <Text style={styles.textStyle}>
                                The Number Was:
                             </Text>

                            <SelectedNumber selectedNum={props.numberToGuess} styles={{marginLeft:10,}} />

                        </View>

                        <View style={styles.roundDisplay}>

                            <Text style={{
                                marginRight: 10, color: 'red', fontSize: 18, fontFamily: 'openSans-Regular'
                            }}>
                                Rounds It Took To Guess:
                            </Text>

                            <SelectedNumber selectedNum={props.roundsItTook} />

                        </View>

                    </View>
                    
                    <MainButton   onPress={props.onRestartPress}> New Game</MainButton>
                    
                </Card>
            </View>


        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    gameOverContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overContainer: {
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: 'red',
        marginRight: 60,
        fontFamily: 'openSans-Regular'

    },
    btnStyle: {
        marginTop: 10,
        width: 90
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center'

    },
    roundDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
   
})

export default GameOver;