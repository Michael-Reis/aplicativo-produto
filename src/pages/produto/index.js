import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';

import { styles } from './estilo.js';

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
                    {produto.price && <Text style={styles.productPrice}>R$ {produto.price?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>}
                    <Text>Lorem</Text>
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
