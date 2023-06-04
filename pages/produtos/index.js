import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';



export default function Produtos() {
    return (
        <View style={styles.container}>
            <Text>Produtos</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff5b00',
    }
});