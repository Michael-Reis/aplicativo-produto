

import { View, Text, StyleSheet } from "react-native"

export default function Indicadores() {
    return (
        <View style={styles.cont}>
            <Text style={{textAlign: 'center'}}>Pagina de indicadores</Text>
            <Text style={{textAlign: 'center'}}>Pagina de indicadores</Text>
            <Text style={{textAlign: 'center'}}>Pagina de indicadores</Text>
            <Text style={{textAlign: 'center'}}>Pagina de indicadores</Text>
        </View>
    )



}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff5b00',
    }
})