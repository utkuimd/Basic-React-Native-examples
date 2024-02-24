import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './songCard.style';

const songCard = ({song}) => {
    const SoldOut = () => {
        if(song.isSoldOut === true){
            return <View style={styles.footer}>
                <Text style={styles.footer_text}>TÜKENDİ</Text>
            </View>
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: song.imageUrl}}
            />
            <View style={styles.body}>
                <Text style={styles.title}>{song.title}</Text>
                <View style={styles.detail}>
                    <Text style={styles.artist}>{song.artist}</Text>
                    <Text>{song.year}</Text>
                </View>
            </View>
            {SoldOut()}
        </View>
    )

}

export default songCard;
