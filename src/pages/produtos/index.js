import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FiltroProduto } from '../../components/filtroProduto';

export default function Produtos({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

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

  async function CarregarMaisProdutos() {

    setIsLoading(true);
    const response = await fetch(`https://www.orit.com.br/web_api/products?page=${page}`);
    const dados = await response.json();
    const lista_produtos_page = dados.Products;
    setProdutos([...produtos, ...lista_produtos_page]);
    setPage(page + 1);
    setIsLoading(false);


  }



  return (
    <View style={styles.container}>
      <View style={styles.pesquisarProduto}>
        <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#fff"
        />
      </View>
      <View >
        <FiltroProduto/>
      </View>
      <FlatList
        data={produtos}
        numColumns={2}
        renderItem={(produto) => (
          <TouchableOpacity style={styles.product} onPress={() => navigation.navigate('DETALHE', { productId: produto.item.Product.id })}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: produto.item.Product?.ProductImage[0].thumbs['180'].https }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
              {produto.item.Product.brand && <Text style={styles.brand}>{produto.item.Product.brand}</Text>}
              <Text style={styles.name}>{produto.item.Product.name}</Text>
              <Text style={styles.price}>R$ {produto.item.Product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>
          </TouchableOpacity>

        )}
        showsVerticalScrollIndicator={false}
        // keyExtractor={(item) => item.Product.id.toString()}
        onEndReached={() => {
          CarregarMaisProdutos();
        }}

      />

      {isLoading && <View style={styles.loadingContainer}><ActivityIndicator size="large" color="#ff5b00" /></View>}
    </View >
  );
}

const styles = StyleSheet.create({

  container: {
    position: 'relative',
    flex: 1,
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

  product: {
    width: '50%',
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
    paddingVertical: 10
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#fff'
  },
  icon: {
    marginRight: 10
  }
});
