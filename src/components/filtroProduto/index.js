import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export const FiltroProduto = () => {

    const categorias = [
        {
            nome: 'ANEL',
            url: 'https://images.tcdn.com.br/img/img_prod/848976/anel_solitario_julieta_em_ouro_18k_3049_1_958a7cd8f9ec59152796b048efeb67b1.jpg'
        },
        {
            nome: 'BRINCO',
            url: 'https://cdn.sistemawbuy.com.br/arquivos/ba1e162e19a97ed5de091d40384c7993/produtos/LA6RU8/brinco-ear-hook-brilhante-arrazzi-62210f4136cec.jpeg'
        },
        {
            nome: 'COLAR',
            url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/237/products/c4789-51-ebfdbf455de918653a16560056781979-640-0.webp'
        },
        {
            nome: 'PINGENTE',
            url: 'https://images.tcdn.com.br/img/img_prod/747281/pingente_em_ouro_18k_medalha_divino_espirito_santo_pi92544_509_2_20201127141319.jpg'
        },
        {
            nome: 'PULSEIRA',
            url: 'https://dldk7teh308jo.cloudfront.net/Custom/Content/Products/10/00/1000913_pulseira-folheada-a-ouro-18k-corrente-espelhada-13113_m5_637623006596227845.jpg'
        },
        {
            nome: 'TORNOZELEIRA',
            url: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/deluxo/media/uploads/produtos/foto/b99bf4a03af076.jpg'
        },
        {
            nome: 'RELOGIOS',
            url: 'https://www.meutenis.com.br/img/produtos/REF254352-11.jpg'
        }
    ]

    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.filtersContainer}
            showsHorizontalScrollIndicator={false}>
            {
                categorias.map((categoria, index) => {

                    return (
                        <View key={index} >
                            <View style={styles.filtroProduto}>
                                <Image source={{ uri: categoria.url }} style={styles.fotoFiltro} />

                            </View>
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>{categoria.nome}</Text>
                        </View>


                    )
                })
            }
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    filtersContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,

    },
    filtroProduto: {
        width: 100,
        height: 100,
        marginLeft: 10,
        borderRadius: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 5,
    },
    fotoFiltro: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'cover',
    }

})