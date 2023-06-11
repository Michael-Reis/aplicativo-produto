import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, FlatList, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Produto({ navigation }) {
    const route = useRoute();
    const { productId } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [produto, setProduto] = useState({});
    const [produtoImagens, setProdutoImagens] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isImageModalVisible, setIsImageModalVisible] = useState(false);
    const [initialImageIndex, setInitialImageIndex] = useState(0);

    const [descrition, setDescription] = useState('');
    const flatListRef = useRef(null);

    useEffect(() => {
        async function getProduto() {
            const response = await fetch(`https://www.orit.com.br/web_api/products/${productId}`);
            const data = await response.json();
            const produto = data.Product;
            console.log(data.Product)
            setProduto(produto);
            setProdutoImagens(data.Product.ProductImage);
            setIsLoading(false);
        }

        getProduto();
    }, [productId]);

    const renderImagem = ({ item, index }) => (
        <TouchableOpacity onPress={() => {
            setIsImageModalVisible(true);
            setInitialImageIndex(index);
        }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.thumbs['180'].https }} style={styles.fotoProduto} />
            </View>
        </TouchableOpacity>
    );

    const handlePageChange = (event) => {
        const page = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        setCurrentPage(page);
    };

    const handleScrollTo = (page) => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: page });
        }
    };

    const handleCloseImageModal = () => {
        setIsImageModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <FlatList
                    ref={flatListRef}
                    data={produtoImagens}
                    renderItem={renderImagem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContentContainer}
                    onMomentumScrollEnd={handlePageChange}
                />

                <View style={styles.pagination}>
                    {produtoImagens.map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.paginationDot,
                                index === currentPage ? styles.paginationDotActive : null,
                            ]}
                            onPress={() => handleScrollTo(index)}
                        />
                    ))}
                </View>

            </View>

            <View style={styles.productContainer}>
                <View style={styles.productContainer}>
                    <Text style={styles.productName}>{produto.name}</Text>
                    <Text style={styles.productPrice}>R$ {produto.price}</Text>
                    <Text>{produto.description}</Text>
                </View>

            </View>

            <View style={styles.addToCartContainer}>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>ADICIONAR AO CARRINHO</Text>
                </TouchableOpacity>
            </View>


            <Modal visible={isImageModalVisible} transparent onRequestClose={handleCloseImageModal}>
                <ImageViewer
                    imageUrls={produtoImagens.map((item) => ({ url: item.thumbs['180'].https }))}
                    enableSwipeDown
                    onSwipeDown={handleCloseImageModal}
                    saveToLocalByLongPress={false}
                    enablePreload
                    index={initialImageIndex}
                />
                <TouchableOpacity style={styles.closeButton} onPress={handleCloseImageModal}>
                    <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
            </Modal>


            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#ff5b00" />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    bannerContainer: {
        width: '100%',
        height: Dimensions.get('window').height * 0.3,
    },
    flatListContentContainer: {
        alignItems: 'center',
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fotoProduto: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: '#ff5b00',
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 20,
    },
    addToCartContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#ff5b00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    productContainer: {
        padding: 10,
    },
    productName: {
        fontSize: 22,
    },
    productPrice: {
        fontSize: 20,
        color: '#ff5b00',
        fontWeight: '500',
    }
});
