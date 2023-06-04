
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Indicadores from '../pages/indicadores';
import Produtos from '../pages/produtos';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const RouterAuth = () => {
    const Stack = createBottomTabNavigator();

    return (
        <Stack.Navigator 
        initialRouteName='Produtos' 
        screenOptions={{ tabBarActiveTintColor: '#ff5b00', tabBarInactiveTintColor: 'grey', tabBarInactiveBackgroundColor: '#ffff' }} >
            <Stack.Screen name="INDICADORES" component={Indicadores} options={{
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="trending-up" color={color} size={30} />

                }
            }} />
            <Stack.Screen name="PRODUTOS" component={Produtos}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <MaterialCommunityIcons name="heart" color={color} size={30} />

                    }
                }}
            />
        </Stack.Navigator>
    )

}