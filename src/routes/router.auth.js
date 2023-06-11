
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Indicadores from '../pages/indicadores';
import Produtos from '../pages/produtos';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Produto from '../pages/produto';
export const RouterAuth = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();


    const ProdutoStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="LISTA_PRODUTOS"
                    component={Produtos}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DETALHE"
                    component={Produto}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    };




    return (
        <Tab.Navigator
            initialRouteName='PRODUTOS'
            screenOptions={{ tabBarActiveTintColor: '#ff5b00', tabBarInactiveTintColor: 'grey', tabBarInactiveBackgroundColor: '#ffff' }}
        >
            <Tab.Screen
                name="INDICADORES"
                component={Indicadores}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="trending-up" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="PRODUTOS"
                component={ProdutoStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="SACOLA"
                component={Produtos}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={30} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};
