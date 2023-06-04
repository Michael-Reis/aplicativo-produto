import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Produtos from './pages/product';
// npm install @react-navigation/native
// npm install @react-navigation/stack


const Stack = createNativeStackNavigator(); // Adicione esta linha


export default function App() {

  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Produtos" component={Produtos}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
