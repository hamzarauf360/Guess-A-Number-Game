import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Colors from '../Constants/Colors'


const TwoButtons = (props) => {

  

    return (
        <View style={styles.btnContainer}>

            <View>
                <Button title={props.title1} color={Colors.secondary} onPress={props.onPress1}/>
            </View>

            <View>
                <Button title={props.title2} color={Colors.primary} onPress={props.onPress2}/>
            </View>

        </View>


    );
}


const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-around',
        width: '100%',
        marginLeft: 35,

    }
});


export default TwoButtons;