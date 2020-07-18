/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useState} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const getFullName = (first, sec , last)=>{

  return first + " " + sec + " " + last;
}
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
           <Text style={styles.text}>my name is : {getFullName("Mohammad","Abd","Raziq")}</Text>
           <TextInput
           style={{
             height: 40,
             borderColor: 'gray',
             borderWidth: 1
           }}
           defaultValue="Name me!"
         />


          < >
         <Image  source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style= {{width:200 , height:200}}/>
         </>
          </View>

          <CompTest name="mohammad" />
          <CompTest name= "Abd"/>
          <CompTest name= "raziq"/>
          <CompTest1/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



const CompTest1 = () => {
 const [count,increaseCount] = useState(0);

  return(
    <>
    <Text>OZOZOZOZ {count}</Text>
    <Button title="increase" onPress={()=>{
     increaseCount(19)
      }}> </Button>
    </>
    );
}
const CompTest = (props) =>{
  

const [isHungry , setIsHungry] = useState(true);
  return (
    <>
    <Text>name is: {props.name}</Text>
    <Button onPress={()=>{
      setIsHungry(false);
      }} title={isHungry ? "give me milk" : "thanks"}> </Button>
   </>
    );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  text:{
    color: Colors.dark,
    fontSize:20,
    textAlign:'center',
  }
});

export default App;
