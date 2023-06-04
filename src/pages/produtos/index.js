import { StyleSheet, View, Text, ScrollView, Image, TextInput, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function GetProdutos() {
      const response = await fetch('https://www.orit.com.br/web_api/products');
      const data = await response.json();
      const lista_produtos = data.Products;
      setProdutos(lista_produtos);
      setIsLoading(false);
    }

    GetProdutos();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff5b00" />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.pesquisarProduto}>
        <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#fff"
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {produtos.map((produto, key) => {
          return (
            <View style={styles.product} key={key}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: produto.Product.ProductImage[0].thumbs['180'].https }} style={styles.image} />
              </View>
              <View style={styles.infoContainer}>
                {produto.Product.brand && <Text style={styles.brand}>{produto.Product.brand}</Text>}
                <Text style={styles.name}>{produto.Product.name}</Text>
                <Text style={styles.price}>R$ {produto.Product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  product: {
    width: '48%',
    height: 220,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    marginTop: 10,
    height: 70,
  },
  name: {
    fontSize: 16,
    overflow: 'hidden',
    height: 40,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  brand: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  pesquisarProduto: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff5b00',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
