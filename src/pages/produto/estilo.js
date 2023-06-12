import { StyleSheet, Dimensions } from 'react-native';
// import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    // comentarios2
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
