import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './productsCard.style';

const productsCard = ({product}) => {

    const isInStock = () => {
        if(product.inStock === false){
            return <Text style={styles.inStock}>STOKTA YOK!</Text>
        }
    }
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: product.imgURL}}
            />
            <View style={styles.body}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {isInStock()}
            </View>
        </View>
    )
    
}

export default productsCard;
