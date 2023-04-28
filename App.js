import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title='Tela2'
     onPress={()=>navigation.navigate('Teladd')}
/>
    </View>
  );
}

function Tela2({navigation}){
  return (


<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text  style={{ flex:1/2,  fontWeight:"Comic Sans MS",fontFamily: "Bold", fontSize: 35, color: "#0b3656",marginTop:-10}}>Descrição do Projeto:</Text>

<Text style={{ fontWeight: "Comic Sans MS",fontFamily: "Roboto", fontSize: 20, color: "#0b3656", backgroundColor:'#d3d3d3', borderRadius: 10,marginBottom:80,marginTop:-125, justifyContent: 'flex-start',alignItems: 'center'}}>
   vamos fazer um app de agendamento de sala, ou seja,o usuário irá agendar o dia/hora que a sua equipe vai precisar da sala x, além disso os equipamentos que ele irá utilizar.
   
 

</Text>

<Button

title='Voltar'
onPress={()=>navigation.goBack()}
/>





</View>



);
}



function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='TelaHome'>

        <Stack.Screen
        
         name="Home" 
         component={HomeScreen} />
      
        <Stack.Screen 
        
        name="Teladd" 
        component={Tela2} />
      

      </Stack.Navigator>


    </NavigationContainer>







  );
}




export default App;
/*

import React,{Component} from 'react';
import {Text, View,StyleSheet, Button} from 'react-native';
import Estilo from './componentes/Estilos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Pilha=createStackNavigator();

function TelaHome({navigation}){

  return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text>Tela Home</Text>
<Text>curso react-native</Text>

<Button
title='TelaCanal'
onPress={()=>navigation.navigate('Canal')}
/>


</View>

  );
}

function TelaCanal({navigation}){
  return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text>Tela Canal</Text>
<Text>Universidade Católica de PE</Text>

<Button
title='Home'
onPress={()=>navigation.goBack()}
/>



<Button
title='Voltar'
onPress={()=>navigation.navigate('Home')}
/>

</View>

  );
}

export default function App1(){

return (

   <NavigationContainer>
  <Pilha.Navigator initialRouteName='TelaHome'>

  <Pilha.Screen
  name="Home"
  component={TelaHome}
  options={{title:'Tela Inicial'}}
  />


<Pilha.Screen
  name="Canal"
  component={TelaCanal}
  options={{title:'Tela Canal'}}
  />


  </Pilha.Navigator>
   </NavigationContainer>
 );
};


*/