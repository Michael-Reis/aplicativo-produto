import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

export default function Produto({ navigation }) {
    const route = useRoute();
    const { productId } = route.params;
    const [codigoProduto, setCodigoProduto] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function GetProduto() {
            const response = await fetch(`https://www.orit.com.br/web_api/products/${productId}`);
            const data = await response.json();
            const produto = data.Product;
            setProduto(produto);
            setIsLoading(false);
            console.log(produto)
        }

        GetProduto();
    }, [codigoProduto]);


    return (
        <View>
            <Text>Código</Text>
            <Text>{productId}</Text>


            
            {isLoading && <View style={styles.loadingContainer}><ActivityIndicator size="large" color="#ff5b00" /></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        zIndex: 1000,
    },
})