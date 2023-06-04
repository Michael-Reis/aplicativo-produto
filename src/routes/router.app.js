import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
export const RouterApp = () => {
    
    const Stack = createBottomTabNavigator(); 

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
        </Stack.Navigator>
    )
}