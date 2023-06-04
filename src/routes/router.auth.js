
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Indicadores from '../pages/indicadores';
import Produtos from '../pages/produtos';

export const RouterAuth = () => {
    const Stack = createBottomTabNavigator(); 

    return (
        <Stack.Navigator initialRouteName='Indicadores'>
            <Stack.Screen name="Indicadores" component={Indicadores} />
            <Stack.Screen name="Produtos" component={Produtos} />
        </Stack.Navigator>
    )

}