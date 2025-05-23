import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FloatingChatBotButton from './components/FloatingChatBotButton';
import ClimatScreen from './screens/ClimatScreen'; // Assurez-vous d'importer ClimatScreen
import DiagnoseScreen from './screens/DiagnoseScreen'; // Assurez-vous d'importer DiagnoseScreen
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Diagnose" component={DiagnoseScreen} />
          <Stack.Screen name="Climat" component={ClimatScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* 🔥 Ajout du bouton de chatbot flottant */}
      <FloatingChatBotButton />
    </>
  );
}