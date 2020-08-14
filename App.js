import React,{useState,useEffect} from 'react';
import { StyleSheet,ScrollView, View, Image,Dimensions } from 'react-native';
import Header from './Components/Header'
import UserInputScreen from './Screens/UserInputScreen'
import GuessNumber from './Screens/GuessNumber'
import GameOver from './Screens/GameOver'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import DefaultStyles from './Constants/DefaultStyles'

const fetchFonts = () =>{
  return Font.loadAsync({
    'openSans-Regular':require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSans-Bold':require('./assets/fonts/OpenSans-Bold.ttf'),

  })
}




export default function App() {

  const [selectedNum,setselectedNum] = useState(-1);

  const [startGame,setStartGame] = useState(false);

  const [dataLoad,setDataLoad] = useState(false);


  const [gameOverStatus,setGameOverStatus] = useState(false);

  const [rounds,setRounds] = useState(0);

  const [showMainImg,setShowMainImg]  = useState(true);
 
  
const [marginLeftImg,setmarginLeftImg] = useState(Dimensions.get('window').width >400 ? 270: 50);






useEffect(()=>{
  const updateMarginsForImg=()=>{
    setmarginLeftImg(Dimensions.get('window').width >400 ? 270: 50)
  };
  
 
  Dimensions.addEventListener('change',updateMarginsForImg);

  return () =>{
    Dimensions.removeEventListener('change',updateMarginsForImg)
  }
})


  if(dataLoad===false)
  {
    return(
    <AppLoading onFinish={()=>setDataLoad(true)} startAsync={fetchFonts}/>
    );
  }

  const userInputHandler= (enteredNum) =>{
    setselectedNum(enteredNum);
    setStartGame(true);
  }

  const gameOverHandler = (attempts) =>{
    setGameOverStatus(true);
    setStartGame(false);
    setRounds(attempts);
    setShowMainImg(false);
  }

  const restartGame = () =>{
    setStartGame(false);
    setGameOverStatus(false);
    setShowMainImg(true);
  }

  let mainImg = null;
  if(showMainImg)
  {
    mainImg= (<View style={{...DefaultStyles.imgContainer,marginLeft:marginLeftImg}}>
  <Image source={require('./assets/main_screen_img.png')} resizeMode='contain' style = {DefaultStyles.imgStyle}/>
  </View>);
  }

  let content =   (

  <ScrollView>

  {mainImg}
  <UserInputScreen screenTitle = "Start A New Game!" onPresss = {userInputHandler}/>

  </ScrollView>
)

  /*content=  <GameOver onRestartPress={restartGame} roundsItTook={1} numberToGuess={1}></GameOver>
*/
  if(startGame && gameOverStatus===false)
  {
    content =     (<ScrollView>{mainImg}<GuessNumber userNum = {selectedNum} overStatus={gameOverHandler} /></ScrollView>)

  }

  else if (startGame===false && gameOverStatus)
  {
    content=  <GameOver onRestartPress={restartGame} roundsItTook={rounds} 
    propImgStyle = {marginLeftImg}
    numberToGuess={selectedNum}></GameOver>
  }


  return (
    <View style={styles.screen}>
      <Header title = "Guess A Number Game"/>
      {content}
    </View>
);

}



const styles = StyleSheet.create({
  screen:{
    flex:1, //ensures that we take whole space on the screen
  },
 
    
});




  /**return (
    <View style={styles.screen}>
      <Header title = "Guess A Number Game"/>
      <UserInputScreen screenTitle = "Start A New Game!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1, //ensures that we take whole space on the screen
  },
    
});/ */